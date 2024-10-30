const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "BookAia"
  const SYMBOL = "BA"

  // Deploy contract
  const BookAia = await ethers.getContractFactory("BookAia")
  const bookAia = await BookAia.deploy(NAME, SYMBOL)
  await bookAia.deployed()

  console.log(`Deployed BookAia Contract at: ${bookAia.address}\n`)

  const occasions = [
    {
      name: "Mumbai Warriors Fight Night",
      cost: tokens(3),
      tickets: 150,
      date: "December 5 2024",
      time: "7:00PM IST",
      location: "NSCI Dome - Mumbai, Maharashtra"
    },
    {
      name: "ETH Bengaluru",
      cost: tokens(1),
      tickets: 200,
      date: "January 15 2025",
      time: "10:00AM IST",
      location: "Bengaluru, Karnataka"
    },
    {
      name: "Privacy Hackathon Delhi",
      cost: tokens(0.25),
      tickets: 250,
      date: "February 10 2025",
      time: "9:00AM IST",
      location: "India Habitat Centre - Delhi"
    },
    {
      name: "Kolkata Knight Riders Fan Meet",
      cost: tokens(5),
      tickets: 75,
      date: "March 20 2025",
      time: "6:00PM IST",
      location: "Eden Gardens - Kolkata, West Bengal"
    },
    {
      name: "ETH Summit Hyderabad",
      cost: tokens(1.5),
      tickets: 300,
      date: "April 18 2025",
      time: "11:00AM IST",
      location: "HITEX Exhibition Center - Hyderabad, Telangana"
    },
    {
      name: "Jaipur Cultural Fest",
      cost: tokens(2),
      tickets: 100,
      date: "November 12 2024",
      time: "4:00PM IST",
      location: "Albert Hall Museum - Jaipur, Rajasthan"
    },
    {
      name: "Tech Expo Chennai",
      cost: tokens(2.5),
      tickets: 150,
      date: "December 10 2024",
      time: "10:00AM IST",
      location: "Chennai Trade Centre - Chennai, Tamil Nadu"
    },
    {
      name: "Mumbai Startup Summit",
      cost: tokens(1.75),
      tickets: 200,
      date: "December 15 2024",
      time: "10:30AM IST",
      location: "Bombay Exhibition Centre - Mumbai, Maharashtra"
    },
    {
      name: "Lucknow Literary Meet",
      cost: tokens(0.5),
      tickets: 300,
      date: "January 5 2025",
      time: "3:00PM IST",
      location: "Indira Gandhi Pratishthan - Lucknow, Uttar Pradesh"
    },
    {
      name: "Ahmedabad Blockchain Conclave",
      cost: tokens(2.5),
      tickets: 175,
      date: "January 20 2025",
      time: "9:00AM IST",
      location: "GMDC Ground - Ahmedabad, Gujarat"
    },
    {
      name: "Pune Robotics Workshop",
      cost: tokens(1),
      tickets: 100,
      date: "February 2 2025",
      time: "2:00PM IST",
      location: "Balewadi Stadium - Pune, Maharashtra"
    },
    {
      name: "Delhi Art Gala",
      cost: tokens(1.25),
      tickets: 125,
      date: "February 18 2025",
      time: "5:00PM IST",
      location: "India International Centre - Delhi"
    }
];

  for (var i = 0; i < 11; i++) {
    const transaction = await bookAia.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});