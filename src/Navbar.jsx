import { NavLink , Link} from "react-router-dom";
import logo from '../../adasa project/src/assets/adasa-logo.png'

export default function Navbar() {
  return (
    <nav className="fixed-top border-bottom border-secondary-subtle bg-dark bg-opacity-95 backdrop-blur">
      <div className="container-xl px-3 px-sm-4">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ height: "80px" }}
        >
          <Link
            href="/"
            className="d-flex align-items-center gap-3 text-decoration-none group"
            data-discover="true"
          >
            <div
              className="position-relative rounded-3 overflow-hidden"
              style={{ width: "48px", height: "48px" }}
            >
              <img
                src={logo}
                alt="Photography Logo"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-5 fw-bold text-white">عدسة</span>
              <span className="small text-warning-emphasis d-none d-sm-block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="d-none d-md-flex align-items-center">
            <div className="d-flex align-items-center bg-black bg-opacity-50 rounded-pill p-1 border border-secondary-subtle">
              <NavLink
                to="home"
                className="px-4 py-2 rounded-pill small fw-semibold text-secondary text-decoration-none"
                aria-current="page"
                data-discover="true"
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="blog"
                className="px-4 py-2 rounded-pill small fw-semibold text-secondary text-white-hover text-decoration-none transition"
                data-discover="true"
              >
                المدونة
              </NavLink>
              <NavLink
                to="about"
                className="px-4 py-2 rounded-pill small fw-semibold text-secondary text-white-hover text-decoration-none transition"
                data-discover="true"
              >
                من نحن
              </NavLink>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <button className="btn btn-link text-secondary p-2 rounded-3 text-decoration-none border-0">
              <svg
                className="bi"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <a
              href="/blog"
              className="btn btn-danger btn-l px-4 py-3 rounded-pill fw-semibold"
              data-discover="true"
            >
              ابدأ القراءة
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="d-md-none btn btn-link text-secondary p-2 rounded-3 border-0"
            aria-label="Toggle navigation"
          >
            <svg
              className="bi"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`d-md-none overflow-hidden transition-all`}>
          <div className="bg-black bg-opacity-75 rounded-4 p-3 border border-secondary-subtle">
            <div className="d-flex flex-column gap-2">
              <a
                href="/"
                className="px-3 py-2 rounded-3 small fw-semibold bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 text-decoration-none"
                aria-current="page"
                data-discover="true"
              >
                الرئيسية
              </a>
              <a
                href="/blog"
                className="px-3 py-2 rounded-3 small fw-semibold text-secondary text-white-hover text-decoration-none"
                data-discover="true"
              >
                المدونة
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-3 small fw-semibold text-secondary text-white-hover text-decoration-none"
                data-discover="true"
              >
                من نحن
              </a>
              <a
                href="/blog"
                className="btn btn-warning btn-sm mt-2 rounded-pill fw-semibold"
                data-discover="true"
              >
                ابدأ القراءة
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
