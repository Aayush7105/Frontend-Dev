// Q8: MovieTicket and OnlineTicket with prototype method
function MovieTicket(movieName, seatNo, price){
  this.movieName = movieName;
  this.seatNo = seatNo;
  this.price = price;
}

MovieTicket.prototype.printTicket = function(){
  return `Ticket: ${this.movieName} | Seat: ${this.seatNo} | Price: ₹${this.price}`;
};

function OnlineTicket(movieName, seatNo, price, convenienceFee){
  MovieTicket.call(this, movieName, seatNo, price);
  this.convenienceFee = convenienceFee || 0;
}
OnlineTicket.prototype = Object.create(MovieTicket.prototype);
OnlineTicket.prototype.constructor = OnlineTicket;

OnlineTicket.prototype.getTotalAmount = function(){
  return this.price + this.convenienceFee;
};

// demo
const out = document.getElementById('output');
const t1 = new MovieTicket('Planet X', 'B12', 250);
const ot1 = new OnlineTicket('Planet X', 'B13', 250, 40);

const ul = document.createElement('ul');
ul.innerHTML = `<li>${t1.printTicket()}</li><li>${ot1.printTicket()} → Total ₹${ot1.getTotalAmount()}</li>`;
out.appendChild(ul);

console.group('Q8 Movie Tickets');
console.log(t1.printTicket());
console.log(ot1.printTicket(), 'total', ot1.getTotalAmount());
console.groupEnd();
