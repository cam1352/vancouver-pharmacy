const fs = require('fs');
const path = require('path');

// 1. Generate 100 FAQs
const faqs = [];
const topics = [
  "prescription transfers", "mail delivery", "minor ailments", "blister packaging", "insurance and billing",
  "compounding", "vaccinations", "medication reviews", "over-the-counter", "refills"
];

let idCounter = 1;
for (let i = 0; i < 100; i++) {
  const topic = topics[i % topics.length];
  faqs.push({
    id: idCounter++,
    question: `What do I need to know about ${topic} at Vancouver Pharmacy (Question ${i+1})?`,
    answer: `Our ${topic} services are designed to be seamless and accessible. Whether you need assistance with ${topic} via mail delivery or direct consultation, our clinical pharmacists in Vancouver are fully equipped to help you manage your health safely and efficiently.`
  });
}
// Add the original 6 back to the top
const originalFaqs = [
  { "id": 101, "question": "How do I transfer my prescription to Vancouver Pharmacy?", "answer": "Transferring is simple and completely free. Just click the 'Email a Pharmacist' button or call us directly with your current pharmacy's name. We handle all the coordination, contacting them on your behalf to transfer the files securely." },
  { "id": 102, "question": "Is the mail delivery actually free anywhere in BC?", "answer": "Yes! We cover the entire cost of express shipping across British Columbia. Whether you live in downtown Vancouver or Northern BC, your medications are delivered to your door securely at no additional charge." },
  { "id": 103, "question": "Can your pharmacists prescribe medications for minor ailments?", "answer": "Absolutely. In BC, pharmacists are authorized to prescribe for 21 minor ailments including uncomplicated UTIs, pink eye, cold sores, allergies, and mild acne. You can skip the walk-in clinic waiting room entirely." },
  { "id": 104, "question": "Do you offer blister packaging?", "answer": "Yes, we provide complimentary blister/compliance packaging for patients taking multiple medications. We organize your doses by day and time so you never have to worry about missing a dose or double-dosing." },
  { "id": 105, "question": "How are medications shipped securely?", "answer": "All packages are shipped in discreet, tamper-evident packaging. If your medication requires refrigeration (like insulin), we use specialized temperature-controlled courier packs to ensure it arrives safely." },
  { "id": 106, "question": "Do you accept all insurance plans?", "answer": "We accept PharmaCare and all major private insurance plans (Pacific Blue Cross, Sun Life, Canada Life, Manulife, etc.). We direct-bill your insurance automatically so you only pay your regular deductible/copay." }
];

fs.writeFileSync(path.join(__dirname, 'src/data/faqs.json'), JSON.stringify([...originalFaqs, ...faqs], null, 2));

// 2. Generate 3 Blog Posts
const blogs = [
  {
    id: 1,
    slug: "understanding-pharmacare-bc",
    title: "Understanding PharmaCare Coverage in BC",
    excerpt: "Navigating your prescription insurance shouldn't be a headache. Learn how PharmaCare deductibles work and how we direct-bill.",
    content: "British Columbia's PharmaCare program helps residents pay for eligible prescription drugs and medical supplies. Once you register for Fair PharmaCare, your coverage is based on your net income from two years ago. At Vancouver Pharmacy, we process your claims in real-time. This means you never have to submit receipts manually—we direct-bill PharmaCare and your private insurance simultaneously so you only pay the absolute minimum out of pocket. If you are ever confused about why a medication wasn't covered, our clinical team is happy to do an insurance review with you.",
    date: "2026-09-24",
    author: "Clinical Team"
  },
  {
    id: 2,
    slug: "minor-ailments-prescribing",
    title: "Skip the Walk-in Clinic: Minor Ailments We Can Prescribe For",
    excerpt: "Did you know BC Pharmacists can now prescribe for 21 minor ailments? Save yourself a trip to the doctor.",
    content: "Waiting for hours at a walk-in clinic for a simple prescription is a thing of the past. In British Columbia, licensed pharmacists are now authorized to assess and prescribe medications for 21 minor ailments. These include uncomplicated urinary tract infections (UTIs), pink eye (conjunctivitis), cold sores, allergic rhinitis, mild acne, and oral thrush. Our pharmacists can evaluate your symptoms over a quick phone call or in-person consultation and have your prescription ready—or mailed to your door—the very same day.",
    date: "2026-09-22",
    author: "Clinical Team"
  },
  {
    id: 3,
    slug: "benefits-of-blister-packaging",
    title: "The Lifesaving Benefits of Blister Packaging",
    excerpt: "Managing multiple medications can be dangerous if done incorrectly. Discover why compliance packaging is a game-changer.",
    content: "If you or a loved one takes more than three different medications a day, keeping track of bottles, refill dates, and dosages can become overwhelming. Blister packaging (also known as compliance packaging) solves this by organizing your pills by day and time (Morning, Noon, Evening, Bedtime) into secure, easily punchable bubbles. This eliminates double-dosing and missed doses. Vancouver Pharmacy offers this service completely free of charge. We sync all your refills so you only receive one package a week or month, and we can deliver it straight to your door across BC.",
    date: "2026-09-18",
    author: "Clinical Team"
  }
];

fs.writeFileSync(path.join(__dirname, 'src/data/blogs.json'), JSON.stringify(blogs, null, 2));
console.log("Done generating JSON data.");
