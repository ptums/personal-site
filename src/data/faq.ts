// Buyer questions for /work-with-me. Answers in [PETER: ...] are placeholders: they show
// on the page but are left out of the FAQPage JSON-LD and llms.txt until filled in.
// Feature flag: the FAQ is hidden on /work-with-me and left out of JSON-LD and llms.txt
// until it's ready. Set to true to show it.
export const SHOW_FAQ = false;

export const FAQ = [
  {
    question: "How does an engagement work?",
    answer:
      "[PETER: 2 to 3 sentences on how a typical engagement runs, from the intro call to how you check in and report progress.]",
  },
  {
    question: "Are you available for new work?",
    answer:
      "[PETER: 1 to 2 sentences on your current availability and how many clients you take on at once.]",
  },
  {
    question: "What time zones do you work in?",
    answer:
      "[PETER: 1 to 2 sentences on your working hours, your time zone, and how you overlap with teams elsewhere.]",
  },
  {
    question: "How long are your contracts?",
    answer:
      "[PETER: 1 to 2 sentences on typical contract length, the minimum, and how extensions work.]",
  },
  {
    question: "How do we get started?",
    answer:
      "[PETER: 1 to 2 sentences on the first step, such as booking an intro call, and what happens after it.]",
  },
];
