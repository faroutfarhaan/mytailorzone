import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { useNavigate, Link, useParams as useParams$1, Routes, Route } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShieldAlt, FaTshirt, FaTruck, FaCreditCard, FaUndo } from "react-icons/fa";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-B-5HIsd3.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Header = () => {
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 w-full flex flex-row justify-between items-center px-4 py-2 bg-rose-50 text-gray-700 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo.png",
          alt: "MyTailorZone Logo",
          className: "h-10 w-10 object-contain"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold hidden sm:block", children: "MyTailorZone" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center space-x-6", children: [
      /* @__PURE__ */ jsxs("button", { className: "p-2 hover:bg-pink-100 rounded-full transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Search" }),
        "🔍"
      ] }),
      /* @__PURE__ */ jsx("a", { href: "/wishlist", className: "flex items-center hover:text-rose-400 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Wishlist" }) }),
      /* @__PURE__ */ jsx("a", { href: "/cart", className: "flex items-center hover:text-rose-400 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Cart" }) }),
      /* @__PURE__ */ jsx("a", { href: "/account", className: "flex items-center hover:text-rose-400 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Account" }) })
    ] })
  ] });
};
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    { id: 1, src: "/carouselimg.jpg", alt: "Clothing Item 1", link: "/item/1" },
    { id: 3, src: "/carouselimg.jpg", alt: "Clothing Item 3", link: "/item/3" },
    { id: 4, src: "/carouselimg.jpg", alt: "Clothing Item 4", link: "/item/4" },
    { id: 5, src: "/carouselimg.jpg", alt: "Clothing Item 5", link: "/item/5" },
    { id: 2, src: "/carouselimg.jpg", alt: "Clothing Item 2", link: "/item/2" }
  ];
  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };
  const handleSlideClick = (link) => {
    navigate(link);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative max-w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "flex transition-transform duration-500", style: { transform: `translateX(-${currentSlide * 100}%)` }, children: slides.map((slide) => /* @__PURE__ */ jsx("div", { className: "min-w-full cursor-pointer", onClick: () => handleSlideClick(slide.link), children: /* @__PURE__ */ jsx("img", { src: slide.src, alt: slide.alt, className: "object-center w-full h-[18rem]" }) }, slide.id)) }),
    /* @__PURE__ */ jsx("button", { onClick: () => changeSlide(-1), className: "absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full", children: "❮" }),
    /* @__PURE__ */ jsx("button", { onClick: () => changeSlide(1), className: "absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full", children: "❯" })
  ] });
};
const categories = [
  { id: 1, name: "Dresses", logo: "path/to/dress-logo.png", link: "/category/dresses" },
  { id: 2, name: "Tops", logo: "path/to/top-logo.png", link: "/category/tops" },
  { id: 3, name: "Bottoms", logo: "path/to/bottom-logo.png", link: "/category/bottoms" },
  { id: 4, name: "Outerwear", logo: "path/to/outerwear-logo.png", link: "/category/outerwear" },
  { id: 5, name: "Shoes", logo: "path/to/shoes-logo.png", link: "/category/shoes" },
  { id: 6, name: "Accessories", logo: "path/to/accessories-logo.png", link: "/category/accessories" },
  { id: 7, name: "Activewear", logo: "path/to/activewear-logo.png", link: "/category/activewear" },
  { id: 8, name: "Swimwear", logo: "path/to/swimwear-logo.png", link: "/category/swimwear" }
];
const Categories = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (link) => {
    navigate(link);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-300 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-center mb-4", children: "Shop by Category" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center space-x-4", children: categories.map((category) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col items-center cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300",
        onClick: () => handleCategoryClick(category.link),
        children: [
          /* @__PURE__ */ jsx("img", { src: category.logo, alt: category.name, className: "w-16 h-16 mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: category.name })
        ]
      },
      category.id
    )) })
  ] });
};
const bestsellers = [
  { id: 1, src: "path/to/dress1.jpg", alt: "Dress 1", link: "/dress/1" },
  { id: 2, src: "path/to/dress2.jpg", alt: "Dress 2", link: "/dress/2" },
  { id: 3, src: "path/to/dress3.jpg", alt: "Dress 3", link: "/dress/3" },
  { id: 4, src: "path/to/dress4.jpg", alt: "Dress 4", link: "/dress/4" },
  { id: 5, src: "path/to/dress5.jpg", alt: "Dress 5", link: "/dress/5" },
  { id: 6, src: "path/to/dress6.jpg", alt: "Dress 6", link: "/dress/6" },
  { id: 7, src: "path/to/dress7.jpg", alt: "Dress 7", link: "/dress/7" },
  { id: 8, src: "path/to/dress8.jpg", alt: "Dress 8", link: "/dress/8" },
  { id: 9, src: "path/to/dress9.jpg", alt: "Dress 9", link: "/dress/9" },
  { id: 10, src: "path/to/dress10.jpg", alt: "Dress 10", link: "/dress/10" },
  { id: 11, src: "path/to/dress11.jpg", alt: "Dress 11", link: "/dress/11" },
  { id: 12, src: "path/to/dress12.jpg", alt: "Dress 12", link: "/dress/12" }
];
const Bestseller = () => {
  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate("/bestsellers");
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-center mb-4", children: "Bestsellers" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: bestsellers.map((item) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300",
        onClick: () => navigate(item.link),
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.src,
            alt: item.alt,
            className: "w-full h-auto transform transition-transform duration-300 hover:scale-105"
          }
        )
      },
      item.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleShowMore,
        className: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300",
        children: "Show More"
      }
    ) })
  ] });
};
const newArrivals = [
  { id: 1, src: "path/to/newdress1.jpg", alt: "New Dress 1", link: "/newdress/1" },
  { id: 2, src: "path/to/newdress2.jpg", alt: "New Dress 2", link: "/newdress/2" },
  { id: 3, src: "path/to/newdress3.jpg", alt: "New Dress 3", link: "/newdress/3" },
  { id: 4, src: "path/to/newdress4.jpg", alt: "New Dress 4", link: "/newdress/4" },
  { id: 5, src: "path/to/newdress5.jpg", alt: "New Dress 5", link: "/newdress/5" },
  { id: 6, src: "path/to/newdress6.jpg", alt: "New Dress 6", link: "/newdress/6" },
  { id: 7, src: "path/to/newdress7.jpg", alt: "New Dress 7", link: "/newdress/7" },
  { id: 8, src: "path/to/newdress8.jpg", alt: "New Dress 8", link: "/newdress/8" },
  { id: 9, src: "path/to/newdress9.jpg", alt: "New Dress 9", link: "/newdress/9" },
  { id: 10, src: "path/to/newdress10.jpg", alt: "New Dress 10", link: "/newdress/10" },
  { id: 11, src: "path/to/newdress11.jpg", alt: "New Dress 11", link: "/newdress/11" },
  { id: 12, src: "path/to/newdress12.jpg", alt: "New Dress 12", link: "/newdress/12" }
];
const NewArrivals = () => {
  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate("/newarrivals");
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-center mb-4", children: "New Arrivals" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: newArrivals.map((item) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300",
        onClick: () => navigate(item.link),
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.src,
            alt: item.alt,
            className: "w-full h-auto transform transition-transform duration-300 hover:scale-105"
          }
        )
      },
      item.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleShowMore,
        className: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300",
        children: "Show More"
      }
    ) })
  ] });
};
const Body = () => {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-rose-50", children: [
    /* @__PURE__ */ jsx(Carousel, {}),
    /* @__PURE__ */ jsx(Categories, {}),
    /* @__PURE__ */ jsx(Bestseller, {}),
    /* @__PURE__ */ jsx(NewArrivals, {}),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-4 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-pink-900", children: "Custom Tailoring for Your Perfect Fit" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-pink-600", children: "Experience the luxury of perfectly fitted clothing tailored just for you" }),
        /* @__PURE__ */ jsx("button", { className: "bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg transition-colors", children: "Book Appointment" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "aspect-w-16 aspect-h-9 rounded-lg bg-pink-100" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-rose-50 py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-center mb-12 text-pink-800", children: "Our Services" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: [1, 2, 3].map((item) => /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-pink-100" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-pink-800", children: "Service Title" }),
        /* @__PURE__ */ jsx("p", { className: "text-pink-600", children: "Description of the service goes here. Keep it brief and engaging." })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-pink-200 text-pink-900 py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8", children: "Book your appointment today and experience the perfect fit" }),
      /* @__PURE__ */ jsx("button", { className: "bg-white text-pink-500 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors", children: "Contact Us" })
    ] }) })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-rose-50 text-gray-700 pt-12 pb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-rose-900", children: "About MyTailorZone" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Your premier destination for custom tailoring solutions. We combine tradition with technology to deliver perfect fits." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-rose-900", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-gray-600 hover:text-rose-700 transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-gray-600 hover:text-rose-700 transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/measurements", className: "text-gray-600 hover:text-rose-700 transition-colors", children: "Measurements" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-gray-600 hover:text-rose-700 transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-rose-900", children: "Contact Info" }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-600 space-y-2", children: [
          /* @__PURE__ */ jsx("p", { children: "Email: info@mytailorzone.com" }),
          /* @__PURE__ */ jsx("p", { children: "Phone: +1 (555) 123-4567" }),
          /* @__PURE__ */ jsx("p", { children: "Address: 123 Fashion Street, Style City, ST 12345" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-rose-900", children: "Newsletter" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter your email",
              className: "px-4 py-2 bg-white border border-rose-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "px-4 py-2 bg-rose-400 text-white rounded-md hover:bg-rose-500 transition-colors",
              children: "Subscribe"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mt-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", className: "text-rose-400 hover:text-rose-600 text-2xl", children: /* @__PURE__ */ jsx(FaFacebook, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "text-rose-400 hover:text-rose-600 text-2xl", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "text-rose-400 hover:text-rose-600 text-2xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "text-rose-400 hover:text-rose-600 text-2xl", children: /* @__PURE__ */ jsx(FaLinkedin, {}) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-rose-200", children: /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-500", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MyTailorZone. All rights reserved."
    ] }) })
  ] });
};
const ItemDetail = () => {
  const { itemId } = useParams$1();
  return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold", children: [
      "Clothing Item ",
      itemId
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Details about Clothing Item ",
      itemId,
      " go here."
    ] })
  ] });
};
const Trust = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-rose-50 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center space-y-4 md:space-y-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
      /* @__PURE__ */ jsx(FaShieldAlt, { className: "text-rose-900 text-4xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center", children: "Trustworthy Website" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
      /* @__PURE__ */ jsx(FaTshirt, { className: "text-rose-900 text-4xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center", children: "Quality Clothes" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
      /* @__PURE__ */ jsx(FaTruck, { className: "text-rose-900 text-4xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center", children: "Fast Delivery" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
      /* @__PURE__ */ jsx(FaCreditCard, { className: "text-rose-900 text-4xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center", children: "Secure Payments" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
      /* @__PURE__ */ jsx(FaUndo, { className: "text-rose-900 text-4xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center", children: "Easy Returns" })
    ] })
  ] }) });
};
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Body, {}), /* @__PURE__ */ jsx(Trust, {}), /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(Routes, {
      children: /* @__PURE__ */ jsx(Route, {
        path: "/item/:itemId",
        element: /* @__PURE__ */ jsx(ItemDetail, {})
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CmTV3d4W.js", "imports": ["/assets/chunk-W3HZJLUQ-BTDOD7JC.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DN_UcmF6.js", "imports": ["/assets/chunk-W3HZJLUQ-BTDOD7JC.js", "/assets/with-props-ByCEqFH8.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-Dosg6R1Y.js", "imports": ["/assets/with-props-ByCEqFH8.js", "/assets/chunk-W3HZJLUQ-BTDOD7JC.js"], "css": ["/assets/app-B-5HIsd3.css"] } }, "url": "/assets/manifest-a0b533ab.js", "version": "a0b533ab" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
