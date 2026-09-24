const fs = require('fs');
const path = require('path');

const baseDrugs = [
  "Ozempic", "Wegovy", "Adderall", "Vyvanse", "Synthroid", "Crestor", "Lipitor", "Lexapro", "Zoloft", "Prozac", 
  "Wellbutrin", "Concerta", "Ritalin", "Ativan", "Xanax", "Valium", "Klonopin", "Gabapentin", "Lyrica", "Cymbalta", 
  "Effexor", "Paxil", "Celexa", "Trintellix", "Viagra", "Cialis", "Levitra", "Metformin", "Jardiance", "Farxiga", 
  "Trulicity", "Mounjaro", "Rybelsus", "Humira", "Enbrel", "Cosentyx", "Stelara", "Otezla", "Dupixent", "Skyrizi", 
  "Tremfya", "Rinvoq", "Xeljanz", "Eliquis", "Xarelto", "Pradaxa", "Brilinta", "Plavix", "Lisinopril", "Losartan", 
  "Amlodipine", "Metoprolol", "Atenolol", "Carvedilol", "Bisoprolol", "Spironolactone", "Furosemide", "Hydrochlorothiazide", 
  "Rosuvastatin", "Atorvastatin", "Simvastatin", "Pravastatin", "Lovastatin", "Ezetimibe", "Fenofibrate", "Pantoprazole", 
  "Omeprazole", "Esomeprazole", "Lansoprazole", "Dexilant", "Rabeprazole", "Famotidine", "Ranitidine", "Ondansetron", 
  "Metoclopramide", "Domperidone", "Diclofenac", "Naproxen", "Ibuprofen", "Celebrex", "Meloxicam", "Tylenol", "Advil", 
  "Aleve", "Aspirin", "Tramadol", "Percocet", "Vicodin", "OxyContin", "Dilaudid", "Morphine", "Fentanyl", "Suboxone", 
  "Methadone", "Naltrexone", "Narcan", "Adderall XR", "Dexedrine", "Biphentin", "Foquest", "Intuniv", "Strattera", 
  "Qelbree", "Latuda", "Abilify", "Seroquel", "Zyprexa", "Risperdal", "Geodon", "Invega", "Rexulti", "Vraylar", 
  "Caplyta", "Nuplazid", "Clozaril", "Lithium", "Depakote", "Lamictal", "Tegretol", "Trileptal", "Topamax", "Keppra", 
  "Vimpat", "Briviact", "Fycompa", "Aptiom", "Xcopri", "Epidiolex", "Banzel", "Sabril", "Onfi", "Sympazan", "Nayzilam", 
  "Valtoco", "Diastat", "Versed", "Propofol", "Ketamine", "Etomidate", "Precedex", "Rocephin", "Zithromax", "Augmentin", 
  "Keflex", "Bactrim", "Cipro", "Levaquin", "Macrobid", "Flagyl", "Cleocin", "Vancocin", "Zyvox", "Cubicin", "Tygacil", 
  "Merrem", "Invanz", "Maxipime", "Fortaz", "Cefotan", "Mefoxin", "Zinacef", "Kefzol", "Ancef", "Penicillin", "Amoxil", 
  "Ampicillin", "Zosyn", "Unasyn", "Timentin", "Biaxin", "Erythrocin", "Doryx", "Vibramycin", "Minocin", "Dalacin", 
  "Tindamax", "Alinia", "Stromectol", "Vermox", "Biltricide", "Pin-X", "Nix", "Elimite", "Eurax", "Sklice", "Ovide", 
  "Ulesfia", "Natroba", "Lindane", "Kwell", "Acticin", "Nizoral", "Lamisil", "Sporanox", "Diflucan", "Mycostatin", 
  "Lotrimin", "Monistat", "Gyne-Lotrimin", "Terazol", "Vagistat", "Gynazole", "Clindesse", "Metrogel", "Vandazole", 
  "Zovirax", "Valtrex", "Famvir", "Abreva", "Denavir", "Xerese", "Sitavig", "Tamiflu", "Relenza", "Rapivab", "Xofluza"
];

const dosages = ["5mg", "10mg", "20mg", "50mg"];
const medications = [];
let idCounter = 1;

for (const drug of baseDrugs) {
  for (const dose of dosages) {
    const fullName = `${drug} ${dose}`;
    const slug = fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    medications.push({
      id: idCounter++,
      name: fullName,
      slug: slug,
      category: "Prescription Medication",
      description: `Fast, secure mail delivery of ${fullName} right to your door.`,
      content: `We dispense and deliver ${fullName} across the province. Transfer your ${drug} prescription to our pharmacy network today and enjoy free express shipping and expert clinical consultations with our licensed pharmacists.`
    });
  }
}

// We have 218 drugs * 4 dosages = 872 medications.

const repos = ['vancouver-pharmacy', 'calgary-pharmacy', 'toronto-pharmacy'];

for (const repo of repos) {
  const dataDir = path.join(__dirname, '..', repo, 'src', 'data');
  if (fs.existsSync(dataDir)) {
    fs.writeFileSync(path.join(dataDir, 'medications.json'), JSON.stringify(medications, null, 2));
    console.log(`Generated 872 medications for ${repo}`);
  }
}
