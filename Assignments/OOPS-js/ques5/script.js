// Q5: Ride-Sharing classes: User, Driver, Trip
class User {
  constructor(name, rating=5){
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle){
    super(name, rating);
    this.vehicle = vehicle; // e.g., {make, model, plate}
  }
}

class Trip {
  constructor(fromLocation, toLocation, distanceKm){
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distanceKm = distanceKm;
  }

  calculateFare(){
    if (this.distanceKm == null || typeof this.distanceKm !== 'number') {
      throw new Error('Distance must be provided as a number');
    }
    if (this.distanceKm < 0) throw new Error('Distance cannot be negative');
    const baseFare = 30; // base
    const perKm = 12; // per km
    return baseFare + (perKm * this.distanceKm);
  }
}

const out = document.getElementById('output');
const driver = new Driver('Amit', 4.8, {make: 'Toyota', model: 'Etios', plate: 'KA01AB1234'});
const user = new User('Kiran', 4.6);

const trips = [
  new Trip('Station', 'Mall', 8.2),
  new Trip('Home', 'Office', 12),
  new Trip('Invalid', 'Nowhere', -5)
];

trips.forEach((t, i) => {
  const div = document.createElement('div');
  try {
    const fare = t.calculateFare();
    div.textContent = `Trip ${i+1}: ${t.fromLocation} → ${t.toLocation}, distance ${t.distanceKm} km → fare ₹${fare}`;
  } catch (err) {
    div.innerHTML = `<strong>Trip ${i+1} Error:</strong> ${err.message}`;
  }
  out.appendChild(div);
});

console.group('Q5 Ride-Sharing');
console.log('Driver', driver);
trips.forEach((t, i) => {
  try { console.log('Trip', i+1, 'fare', t.calculateFare()); } catch(e) { console.warn('Trip', i+1, 'error', e.message); }
});
console.groupEnd();
