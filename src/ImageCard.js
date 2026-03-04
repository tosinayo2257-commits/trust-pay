import step1 from "./assets/Step1.png";
import step2 from "./assets/Step2.png";
import step3 from "./assets/Step3.png";
import step4 from "./assets/Step4.png";

export const ImageCard = [
  {
    id: 1,
    title: "Create Your Agreement",
    description:
      "Define the full scope of your project, service, or trade. Set clear terms, outline specific milestones with deliverables and due dates, and establish payment amounts. Invite your counterparty to review and digitally sign.",
    button: "Get Started",
    image: { step1 },
  },
  {
    id: 2,
    title: "Fund The Escrow",
    description:
      "Once both parties sign, the client securely deposits the agreed funds for the first milestone (or the entire project) into the escrow account. Both parties receive immediate confirmation.",
    button: "Get Started",
    image: {},
  },
  {
    id: 3,
    title: "Track Milestones",
    description:
      "Monitor the progress of each milestone through your dashboard. Communicate directly with your counterparty, share necessary files, and stay updated on timelines.",
    button: "Get Started",
    image: "/images/step3.png",
  },
  {
    id: 4,
    title: "Approve & Get Paid or Pay",
    description:
      "Clients review submitted work for each milestone. Upon approval, funds are instantly released from escrow to the service provider.",
    button: "Get Started",
    image: "/images/step4.png",
  },
];
