import FlightSuretyApp from "../../build/contracts/FlightSuretyApp.json";
import Config from "./config.json";
import Web3 from "web3";

export default class Contract {
  constructor(network, callback) {
    let config = Config[network];
    this.web3 = new Web3(new Web3.providers.HttpProvider(config.url));
    this.flightSuretyApp = new this.web3.eth.Contract(
      FlightSuretyApp.abi,
      config.appAddress
    );
    this.initialize(callback);
    this.owner = null;
    this.airlines = {};
    this.passengers = {};
    this.airlineNames = [
      "RYANAIR",
      "LUFTHANSA",
      "EASYJET",
      "WIZZAIR",
      "LUXAIR",
    ];
    this.passengerNames = ["KEVIN", "SAAD", "MARC", "FELIX"];
    this.flights = {
      RYANAIR: ["RYANAIR_01", "RYANAIR_02", "RYANAIR_03"],
      LUFTHANSA: ["LUFTHANSA_01", "LUFTHANSA_02", "LUFTHANSA_03"],
      EASYJET: ["EASYJET_01", "EASYJET_02", "EASYJET_03"],
      WIZZAIR: ["WIZZAIR_01", "WIZZAIR_02", "WIZZAIR_03"],
      LUXAIR: ["LUXAIR_01", "LUXAIR_02", "LUXAIR_03"],
    };
  }

  initialize(callback) {
    this.web3.eth.getAccounts((error, accounts) => {
      this.owner = accounts[0];

      let counter = 1;
      let airlineNumber = 0;

      while (Object.keys(this.airlines).length < 5) {
        this.airlines[accounts[counter++]] = this.airlineNames[airlineNumber++];
      }
      airlineNumber = 0;
      while (Object.keys(this.passengers).length < 5) {
        this.passengers[accounts[counter++]] = this.passengerNames[
          airlineNumber++
        ];
      }

      callback();
    });
  }

  isOperational(callback) {
    let self = this;
    self.flightSuretyApp.methods
      .isOperational()
      .call({ from: self.owner }, callback);
  }

  fetchFlightStatus(airline, flight, timestamp, callback) {
    let self = this;
    let payload = {
      airline: airline,
      flight: flight,
      ts: timestamp,
    };
    self.flightSuretyApp.methods
      .fetchFlightStatus(payload.airline, payload.flight, payload.ts)
      .send({ from: self.owner }, (error, result) => {
        callback(error, result);
      });
  }

  registerAirline(fromAirline, airlineToRegister, callback) {
    let self = this;

    self.flightSuretyApp.methods
      .registerAirline(airlineToRegister.toString())
      .send({ from: fromAirline.toString(), gas: 1000000 }, (error, result) => {
        callback(error, result);
      });
  }

  sendFunds(airline, funds, callback) {
    let self = this;
    const fundstosend = self.web3.utils.toWei(funds, "ether");
    self.flightSuretyApp.methods
      .AirlineFunding()
      .send(
        { from: airline.toString(), value: fundstosend },
        (error, result) => {
          callback(error, result);
        }
      );
  }

  purchaseInsurance(
    airline,
    flight,
    passenger,
    fundsEther,
    timeStamp,
    callback
  ) {
    let self = this;
    const fundstosend = self.web3.utils.toWei(fundsEther, "ether");

    self.flightSuretyApp.methods
      .registerFlight(airline.toString(), flight.toString(), timeStamp)
      .send(
        { from: passenger.toString(), value: fundstosend, gas: 1000000 },
        (error, result) => {
          callback(error, result);
        }
      );
  }

  withdrawFunds(passenger, funds_ether, callback) {
    let self = this;
    const fundsTowithdraw = self.web3.utils.toWei(funds_ether, "ether");

    self.flightSuretyApp.methods
      .withdrawFunds(fundsTowithdraw)
      .send({ from: passenger.toString() }, (error, result) => {
        callback(error, result);
      });
  }

  getBalance(passenger, callback) {
    let self = this;
    self.flightSuretyApp.methods
      .getBalance()
      .call({ from: passenger }, (error, result) => {
        callback(error, result);
      });
  }
}
