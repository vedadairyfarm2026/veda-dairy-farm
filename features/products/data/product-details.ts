export type ProductDetail = {
  seoTitle: string;
  description: string;
  heading: string;
  intro: string;
  sections: { heading: string; text: string }[];
  questions: { question: string; answer: string }[];
};

export const productDetails: Record<string, ProductDetail> = {
  "fresh-milk": {
    seoTitle: "Fresh Cow & Buffalo Milk in Surat",
    description: "Enquire about fresh Gir cow and Murrah buffalo milk from Veda Dairy Farm, Ambheta, Surat. Get current prices and confirm home delivery for your locality.",
    heading: "Fresh cow and buffalo milk in Surat",
    intro: "Choose milk from our Gir cows or Murrah buffaloes at Veda Dairy Farm in Ambheta, Surat District. Traditional hand milking, clean collection and prompt cooling are part of our daily farm routine. Enquire about the milk type and quantity that suit your household.",
    sections: [
      { heading: "Two milk sources, a clear choice", text: "Our cow milk comes from Gir cows and our buffalo milk comes from Murrah buffaloes. Include your preferred type when ordering, whether you want milk for daily chai, breakfast or cooking. Our team confirms which option is available for your order." },
      { heading: "From hand milking to prompt cooling", text: "Our collection routine includes clean hands, individual towels, separate first-stream checks and clean pails. Milk is cooled promptly after collection. Follow the farm journey on our home page to see the steps and learn how milk is handled at Veda Dairy Farm." },
      { heading: "Plan a regular household order", text: "For a regular order, have your locality or PIN code, preferred milk type and daily quantity ready. The delivery page explains what to confirm about your route, schedule and order. Our farm is in Ambheta Village, Olpad Taluka, Surat District." },
    ],
    questions: [
      { question: "Do you offer both cow milk and buffalo milk?", answer: "Yes. Our dairy range includes milk from Gir cows and Murrah buffaloes. Ask us about current availability and let us know which type you would like." },
      { question: "How is the milk collected at Veda Dairy Farm?", answer: "We use traditional hand milking, with clean hands, individual towels, separate first-stream checks and clean pails. Prompt cooling follows collection. The farm journey on our home page explains the routine step by step." },
      { question: "Can I arrange regular milk delivery in Surat?", answer: "Send your locality and the quantity you usually need. Our team will check delivery availability for your address and discuss a suitable routine." },
    ],
  },
  dahi: {
    seoTitle: "Fresh Dahi & Curd in Surat",
    description: "Order homestyle dahi (curd) from Veda Dairy Farm in Surat. Enquire about quantities, current prices and local delivery on WhatsApp.",
    heading: "Homestyle dahi for Surat homes",
    intro: "Thick, creamy dahi brings familiar comfort to a meal. Our homestyle curd is part of Veda Dairy Farm’s dairy range, alongside fresh milk, ghee and paneer. Ask our team about availability and local delivery in Surat.",
    sections: [
      { heading: "For meals, raita and everyday cooking", text: "Serve dahi with your everyday meal, turn it into raita with your favourite vegetables, or use it in family recipes. Let us know how much you need, whether it is for your usual kitchen routine or a gathering at home." },
      { heading: "Dahi and curd on your shopping list", text: "Dahi is commonly called curd in Indian kitchens. On our dairy menu, both names refer to our homestyle dahi. Include the quantity you need and your preferred day when planning a household order or a meal with guests." },
      { heading: "Check the details for your order", text: "Before ordering, confirm the milk source, ingredients, pack size, storage instructions and use-by date with our team. You can include dahi with a milk, ghee or paneer enquiry and check delivery for your locality on the Surat delivery page." },
    ],
    questions: [
      { question: "Are dahi and curd the same product on your menu?", answer: "Yes. Dahi and curd refer to the same homestyle dairy product on our menu. It can accompany a meal or be used in raita and family recipes." },
      { question: "Can dahi be delivered with my milk order?", answer: "You can enquire about both in the same message. We will check availability and delivery options for your Surat locality." },
      { question: "Where is Veda Dairy Farm based?", answer: "Our farm is in Ambheta Village, Olpad Taluka, Surat District, Gujarat, PIN 395005." },
    ],
  },
  ghee: {
    seoTitle: "Traditional Ghee in Surat",
    description: "Enquire about traditional ghee from Veda Dairy Farm, Surat. Get current availability, quantities, prices and delivery details directly on WhatsApp.",
    heading: "Traditional ghee in Surat",
    intro: "Golden, aromatic ghee is a familiar part of an Indian kitchen. Veda Dairy Farm’s traditional ghee brings that comfort to warm rotis, family favourites and festival cooking. Contact us to find out what is available for your Surat home.",
    sections: [
      { heading: "For rotis, dal and festival cooking", text: "Use ghee to finish a warm roti or dal, or include it in the sweets and dishes your family enjoys. For festival cooking or a gathering, plan the quantity from your recipes and share the day you need it with our team." },
      { heading: "Know the source and preparation", text: "The milk source and preparation method matter when choosing ghee. Confirm both for the ghee you are ordering, along with the ingredients and pack size. Tell us if you have a preference for cow or buffalo milk ghee so our team can confirm the source of the available batch." },
      { heading: "Plan your ghee order", text: "Check the available pack size, current price, storage instructions and shelf life before you order. If you also need milk, dahi or paneer, include those quantities in your enquiry. Our Surat delivery page explains the address and schedule details to confirm." },
    ],
    questions: [
      { question: "What can I use ghee for?", answer: "Ghee can be used with warm rotis, to finish dal, and in family recipes for everyday meals or festival cooking. Plan the quantity around the dishes you want to prepare." },
      { question: "Can I ask about the source and preparation of your ghee?", answer: "Yes. Ask us about the ghee currently available, including its milk source and preparation, before you decide to order." },
      { question: "Do you deliver ghee in Surat?", answer: "Share your locality or address with us. We will confirm delivery availability and the arrangements for your order." },
    ],
  },
  paneer: {
    seoTitle: "Fresh Paneer in Surat",
    description: "Order soft, fresh paneer from Veda Dairy Farm in Surat. Ask on WhatsApp about quantities, current prices and delivery to your address.",
    heading: "Fresh paneer for your Surat kitchen",
    intro: "From a quick paneer bhurji to a weekend curry, soft paneer fits easily into familiar home cooking. Fresh paneer is part of our dairy range at Veda Dairy Farm. Ask us about the quantity you need and delivery availability in Surat.",
    sections: [
      { heading: "For curries, bhurji and rice dishes", text: "Cube paneer for a curry, crumble it for bhurji or include it in a rice dish. Choose a recipe first so you can plan the quantity for your household or guests. Our fresh paneer is available to enquire about alongside the rest of our dairy range." },
      { heading: "Plan around your cooking day", text: "For a family gathering or a larger meal, share your required quantity and preferred day in advance. Confirm the available pack size and price before finalising your plans, plus the milk source, ingredients, storage instructions and use-by date for your order." },
      { heading: "One enquiry for your dairy shopping", text: "Include paneer, milk, dahi and ghee quantities in the same enquiry if you need several items. Add your Surat locality or PIN code so our team can check the delivery route. The delivery page explains the timing, charges and order details to confirm." },
    ],
    questions: [
      { question: "What can I cook with paneer?", answer: "Paneer can be cubed for curries, crumbled for bhurji or added to rice dishes. Plan your order quantity from your recipe and the number of people you are cooking for." },
      { question: "Can I enquire about a larger paneer order?", answer: "Yes. Tell us the quantity and preferred day in advance. We will check what can be arranged and confirm the details with you." },
      { question: "How do I order paneer for home delivery?", answer: "Send your required quantity and Surat locality on WhatsApp. We will confirm whether delivery is available to your address before taking the order." },
    ],
  },
};
