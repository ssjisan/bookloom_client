import { Dashboard, BookList, Categories, Publishers } from "../../assets/IconSet";

const navConfig = ({ pathname }) => [
  {
    title: "Overview",
    icon: (
      <Dashboard color={pathname === "/" ? "#7635DC" : "#637381"} size={20} />
    ),
    items: [
      {
        title: "Dashboard",
        link: "/",
      },
    ],
  },
  {
    title: "Books",
    icon: (
      <BookList
        color={
          pathname.startsWith("/add_book") || pathname.startsWith("/all_books")
            ? "#7635DC"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "All Books",
        link: "/booklist",
      },
      {
        title: "Add Book",
        link: "/add_book",
      },
    ],
  },
  {
    title: "Categories",
    icon: (
      <Categories
        color={
          pathname.startsWith("/categories") ||
          pathname.startsWith("/add_category")
            ? "#7635DC"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "All Categories",
        link: "/categories",
      },
      {
        title: "Add Category",
        link: "/add_category",
      },
    ],
  },
  {
    title: "Publishers",
    icon: (
      <Publishers
        color={
          pathname.startsWith("/publishers") ||
          pathname.startsWith("/add_publisher")
            ? "#7635DC"
            : "#637381"
        }
        size={20}
      />
    ),
    items: [
      {
        title: "All Publishers",
        link: "/publishers",
      },
      {
        title: "Add Publisher",
        link: "/add_publisher",
      },
    ],
  },
];

export default navConfig;
