export default function Footer() {
  return (
    <footer className="mt-4 w-full text-slate-500">
      {/*      <!-- Main footer --> */}
      <div className="border-t border-slate-200 bg-slate-100 pb-12 pt-16 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-6"
              aria-labelledby="footer-header"
            >
              <span>
                <span className="text-base font-bold sm:text-lg">
                  示例公司
                  <br />
                  Example Company
                </span>
                <br />
                China Overseas Bldg, 139 Hennessy Road, Wanchai, Hong Kong
              </span>
            </div>
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <h3 className="mb-2 text-base font-medium text-slate-700">
                電話 Telephone
              </h3>
              <div className="mb-2 leading-6">1234 5678</div>
              <h3 className="mb-2 text-base font-medium text-slate-700">
                傳真 Fax
              </h3>
              <div className="mb-2 leading-6">1234 5678</div>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <h3 className="mb-2 text-base font-medium text-slate-700">
                電郵 Email
              </h3>
              <div className="mb-2 leading-6">
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <h3 className="mb-2 text-base font-medium text-slate-700">
                網址 Website
              </h3>
              <div className="mb-2 leading-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.example.com"
                >
                  www.example.com
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/*      <!-- Sub Footer --> */}
      <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://example.com"
              className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
            >
              <img
                src="https://placehold.co/300x100/"
                className="h-[1.5rem] object-contain"
                alt="示例公司"
                title="示例公司"
              />
            </a>

            <nav className="col-span-3 md:col-span-4 lg:col-span-6">
              <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                <li className="leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    使用條款
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    私隱政策
                  </a>
                </li>
                <li className="leading-6">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/*      <!-- Sub footer ends --> */}
    </footer>
  );
}
