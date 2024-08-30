import expense from "../assets/expense-tracker.png";
import travel from "../assets/travel-tour.png";
import store from "../assets/book-store.png";

const Myworks = [
    {
        id: 1,
        imgSrc: expense,
        name: "Expense Tracker",
        link: "https://omosiki.github.io/Budget-tracker-Internship/"
    },
    {
        id: 2,
        imgSrc: travel, 
        name: "Travel Tour",
        link:  "https://github.com/omosiki/Travel-tour-website.git" 
    },
    {
        id: 3,
        imgSrc: store, 
        name: "Book Store",
        link:  "https://github.com/omosiki/Book-store.git"
    },
    {
        id: 4,
        imgSrc: travel, // Use the imported variable
        name: "Travel Tour",
        link: "https://omosiki.github.io/Budget-tracker-Internship/" 
    },
    
];

export default Myworks;
