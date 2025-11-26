// Q9: FitnessAnalytics class
class FitnessAnalytics {
  constructor(data){
    this.data = data || [];
    if(!Array.isArray(this.data)) throw new Error('Data must be an array');
  }

  _ensureData(){
    if(this.data.length === 0) throw new Error('Dataset is empty');
  }

  getActiveUsers(threshold=7000){
    this._ensureData();
    return this.data.filter(u => u.steps > threshold);
  }

  getAverageCalories(){
    this._ensureData();
    const total = this.data.reduce((s,u) => s + (u.calories||0), 0);
    return total / this.data.length;
  }

  getUserSummary(){
    this._ensureData();
    return this.data.map(u => `${u.user}: ${u.steps} steps, ${u.calories} calories`);
  }
}

const sample = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

const analytics = new FitnessAnalytics(sample);
const out = document.getElementById('output');

try{
  const active = analytics.getActiveUsers();
  const avgCal = analytics.getAverageCalories();
  const summaries = analytics.getUserSummary();

  const el = document.createElement('div');
  el.innerHTML = `<p><strong>Active users (steps&gt;7000):</strong> ${active.map(a=>a.user).join(', ')}</p>`;
  el.innerHTML += `<p><strong>Average calories:</strong> ${avgCal.toFixed(2)}</p>`;
  el.innerHTML += `<pre>${summaries.join('\n')}</pre>`;
  out.appendChild(el);
} catch (err) {
  out.textContent = `Error: ${err.message}`;
}

console.group('Q9 Fitness');
console.log('Active', analytics.getActiveUsers());
console.log('Average calories', analytics.getAverageCalories());
console.log('Summary', analytics.getUserSummary());
console.groupEnd();
