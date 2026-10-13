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
    intro: "A morning cup of chai, a family breakfast or your everyday cooking: fresh milk is part of the daily rhythm. Veda Dairy Farm offers cow and buffalo milk from our Gir cows and Murrah buffaloes, with local delivery enquiries for Surat homes.",
    sections: [
      { heading: "Choose cow milk or buffalo milk", text: "Tell us which milk you prefer and how much you need. If you are choosing for a particular recipe or your daily routine, ask about the options available that day. We will confirm the milk type, quantity and current price before your order." },
      { heading: "A closer connection to the farm", text: "Our farm is in Ambheta Village, Olpad Taluka, Surat District. Caring for our animals, providing fresh fodder and traditional hand milking are part of our daily routine. Our process page shows the steps from preparing for milking to clean collection and prompt cooling." },
      { heading: "Ask about regular milk delivery", text: "Share your Surat locality, preferred milk type and usual quantity on WhatsApp. We will confirm whether your address is on our delivery route and discuss the available schedule. Delivery availability and timing are confirmed directly with our team." },
    ],
    questions: [
      { question: "Do you offer both cow milk and buffalo milk?", answer: "Yes. Our dairy range includes milk from Gir cows and Murrah buffaloes. Ask us about current availability and let us know which type you would like." },
      { question: "What is the milk price per litre?", answer: "Message us for the current price of your chosen milk type and quantity. We will also confirm any delivery details before you order." },
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
      { heading: "Dahi and curd: ask for your familiar favourite", text: "Whether you call it dahi or curd, you can enquire directly with our team. We will confirm the available quantity and current price so you can choose what works for your household." },
      { heading: "Include dahi in your dairy order", text: "You can ask about dahi along with milk, ghee or paneer. Share your full order and Surat locality on WhatsApp, and we will confirm the items available and whether delivery can be arranged to your address." },
    ],
    questions: [
      { question: "How much dahi can I order?", answer: "Tell us the quantity you would like. We will confirm the available quantities and prices before taking your order." },
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
      { heading: "For everyday meals and family favourites", text: "A little ghee on a warm roti, in your dal or in a treasured family recipe can be part of your daily cooking. Tell us whether you need ghee for everyday use or a larger occasion, and we will confirm the quantities available." },
      { heading: "Ask about the ghee you are ordering", text: "If you have a preference for a particular milk source or preparation method, ask our team before ordering. We will share the details of the ghee currently available so that you can make an informed choice." },
      { heading: "Order directly from Veda Dairy Farm", text: "Send us your required quantity and locality on WhatsApp. We will confirm the current price and delivery options. You can also ask about including milk, dahi or paneer in the same dairy order." },
    ],
    questions: [
      { question: "What quantities of ghee are available?", answer: "Message our team with the quantity you need. We will share the available options and their current prices." },
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
      { heading: "For weekday cooking and weekend feasts", text: "Use paneer in the dishes your family enjoys: curries, bhurji, rice dishes or a special meal. Share the quantity you need with our team so we can confirm what is available for your planned order." },
      { heading: "Plan your paneer order", text: "For a family gathering or a larger meal, contact us with your requirements and preferred day. Availability is confirmed directly, so you can plan your cooking with the order details in hand." },
      { heading: "Fresh paneer and your other dairy favourites", text: "Enquire about paneer on its own or alongside fresh milk, homestyle dahi and traditional ghee. Send your Surat locality with your message, and we will confirm current prices and delivery arrangements before you order." },
    ],
    questions: [
      { question: "What is the price of fresh paneer?", answer: "Message us with the quantity you would like. Our team will share the current price and confirm availability." },
      { question: "Can I enquire about a larger paneer order?", answer: "Yes. Tell us the quantity and preferred day in advance. We will check what can be arranged and confirm the details with you." },
      { question: "How do I order paneer for home delivery?", answer: "Send your required quantity and Surat locality on WhatsApp. We will confirm whether delivery is available to your address before taking the order." },
    ],
  },
};
