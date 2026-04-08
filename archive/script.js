let names=["Mounika","Sidhaarthan Kg","Vemulapati","Ayyappa","Sravan","Chandana","Sai Vikas","Kiran Kumar","Shiva Sai Reddy","Addala Chethan Sri Rishi Varma","Srikar","Kamal Teja","Sateesh Kumar","Vinay Vishal","Vishnu","Adarsh","V Ashwin Kumar","Yasasri","Muddineni Jaswanth Kumar","Varshith Reddy","Venkata Sai Naveen","Poojitha","Nithin","Vishnuvardhan","Naga Akhila","Varun Reddy","Venkatesh","Jaswanth","Imran","C Hemanth Kumar","Ganesh","Varun Chandra","Sudheer Babu","Tharun Kumar","G Mangadevi","Vignesh Goud","Sahithi Jonnadula","Sampath Reddy","Ravi","Dileep Ramu","Panuganti Saikiran","Manikanta","Kati Vivek","Syam Kumar","Abirami A","Nadipineni Raviteja","Gnapika","D.Prudhvi","Gurrala Anusha","Durga Tulasi","Chandra Sekhar Reddy","Meghana","Sai Koushik","Daivaprasanna","Allupurusreenu","Pagadala Ramcharan","Prathip","Mynisha","Anusha P","Bhoomika","P Hima Bindhu","Saiteja","Bhavana"];

let bios = [
  "Professional overthinker with a PhD in Googling symptoms. Survives on chai and last minute miracles.",
  "Half human, half WiFi signal, strong in some places, completely gone in others.",
  "Running on caffeine, chaos, and questionable decisions since forever.",
  "I put the pro in procrastination. Deadlines fear me eventually.",
  "Fluent in sarcasm and song lyrics. Occasionally speaks actual facts.",
  "Trying to be an adult but my inner child keeps hitting snooze.",
  "CEO of saying just one more episode and meaning five.",
  "I do not rise and shine, I caffeinate and hope for the best.",
  "Living life one random thought at a time and somehow making it look planned.",
  "Expert at making plans and even better at cancelling them last minute.",
  "My life is a mix of to do lists and ignoring them creatively.",
  "I came, I saw, I made it awkward.",
  "Still figuring out life but at least my playlist is perfect.",
  "I am not lazy, just on energy saving mode most of the time.",
  "Making memories and bad decisions with equal enthusiasm.",
  "If overthinking burned calories, I would be a fitness icon.",
  "Just winging it because apparently that is a valid life strategy.",
  "I turn simple situations into dramatic stories for no reason.",
  "I have a black belt in overthinking and a minor in procrastination.",
    "Doing my best and calling it a masterpiece.",
  "I plan everything perfectly in my head and nowhere else.",
  "Confidence level depends on how good my hair looks today.",
  "I solve problems I created like a true professional.",
  "Life is confusing but I am confidently confused.",
  "Too chill to care, too curious to stay quiet.",
  "I came with ideas, stayed for snacks, forgot the ideas.",
  "Balancing dreams, doubts, and a lot of random thoughts.",
  "I act like I know what I am doing and hope no one questions it.",
  "Collecting moments, memes, and unfinished plans.",
];

let roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Analyst",
  "QA Engineer",
  "UI UX Designer",
  "Product Manager",
  "Site Reliability Engineer",
  "Blockchain Developer",
  "Game Developer"
];

let companies = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Netflix",
  "Tesla",
  "Adobe",
  "Intel",
  "NVIDIA",
  "Salesforce",
  "Oracle",
  "IBM",
  "Uber",
  "Airbnb",
  "Stripe",
  "Dropbox"
];

let locations = [
  "California",
  "Texas",
  "New York",
  "Florida",
  "Washington",
  "Colorado",
  "Arizona",
  "Georgia",
  "North Carolina",
  "Illinois",
  "Massachusetts",
  "Nevada",
  "Oregon",
  "Utah",
  "Virginia",
  "Michigan",
  "Tennessee"
];

let hobbies = [
  "Overthinking simple decisions like a life mission",
  "Starting things and not finishing them like a pro",
  "Watching tutorials and never actually trying them",
  "Talking to myself and winning every argument",
  "Scrolling endlessly and calling it research",
  "Making plans and cancelling them with confidence",
  "Eating snacks like it is a full time job",
  "Daydreaming about success while doing nothing",
  "Checking the fridge multiple times for no reason",
  "Turning small moments into dramatic stories",
    "Photography but mostly random sunsets and blurry shots",
  "Gaming until I forget what day it is",
  "Trying new food and pretending to be a food critic",
  "Fitness planning more than actual exercising",
  "Learning new tech and abandoning it halfway",
  "Traveling locally and calling it an adventure",
  "Collecting memes like rare artifacts",
  "Music binge listening with zero productivity",
  "Late night walks with deep overthinking sessions",
  "Watching movies and guessing the ending wrong"
];

document.getElementById("name").textContent = names[
    Math.floor(Math.random() * names.length)
];
document.getElementById("bio").textContent = bios[
    Math.floor(Math.random() * bios.length) 
];

document.getElementById("role").textContent = roles[
    Math.floor(Math.random() * roles.length) 
];

document.getElementById("company").textContent = companies[
    Math.floor(Math.random() * companies.length) 
];

document.getElementById("location").textContent = locations[
    Math.floor(Math.random() * locations.length) 
];

document.getElementById("hobby").textContent = hobbies[
    Math.floor(Math.random() * hobbies.length) 
];

document.getElementById("generate").addEventListener("click", function(){
  document.getElementById("profile").src ="https://thispersondoesnotexist.com/?"+Math.random(); // to force reload the image
  //document.getElementById("profile").src = "https://i.pravatar.cc/200?u= + Math.random()/"; // to force reload the image
  document.getElementById("name").textContent = names[Math.floor(Math.random() * names.length)];
  document.getElementById("bio").textContent = bios[Math.floor(Math.random() * bios.length)];
  document.getElementById("role").textContent = roles[Math.floor(Math.random() * roles.length)];
  document.getElementById("company").textContent = companies[Math.floor(Math.random() * companies.length)];
  document.getElementById("location").textContent = locations[Math.floor(Math.random() * locations.length)];
}
);
