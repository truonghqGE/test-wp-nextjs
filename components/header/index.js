import Link from "next/link";

export default function Header() {
  return (
    <div className="the-header">
      <header id="header">
        <div className="container">
          <div className="header-menu">
            <div className="toggle-menu" />
            <div className="menu-main menu-mainv2">
              <div className="container height100">
                <nav className="nav-menu list-flex height100">
                  <div className="nav-left height100 relative-section">
                    <ul>
                      <li>
                        Top Produkte{" "}
                        <ul>
                          <li className="active">
                            <p className="show-sub2" attr-sub="#menu300">
                              CBD Produkte
                            </p>
                            <span className="show-sub3" />
                          </li>
                          <li className="">
                            <p className="show-sub2" attr-sub="#menu301">
                              Ernährung &amp; Schlankmacher
                            </p>
                            <span className="show-sub3" />
                          </li>
                          <li className="">
                            <p className="show-sub2" attr-sub="#menu302">
                              Andere Gesundheits Produkte
                            </p>
                            <span className="show-sub3" />
                          </li>
                        </ul>
                      </li>
                      <li>
                        Produkte Testbericht{" "}
                        <ul>
                          <li className="">
                            <p className="show-sub2" attr-sub="#menu310">
                              Ernährung &amp; Schlankmacher
                            </p>
                            <span className="show-sub3" />
                          </li>
                          <li className="">
                            <p className="show-sub2" attr-sub="#menu311">
                              CBD &amp; Andere Gesundheitsprodukte
                            </p>
                            <span className="show-sub3" />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="logo cursor-pointer">
            <Link href="/">
              <img
                src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/uploads/2022/02/tnhealth.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="header-search">
            <a href="" className="toggle-search" />
            <form action="https://wordpress-749115-2523479.cloudwaysapps.com/search">
              <div className="search-bg">
                <input
                  type="text"
                  name="q"
                  defaultValue=""
                  className="it-form"
                  placeholder="Search..."
                />
                <button className="search-icon" type="submit">
                  <img
                    src="https://wordpress-749115-2523479.cloudwaysapps.com/wp-content/themes/healthcanal/assets/images/search.svg"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="clear" />
        </div>
      </header>
    </div>
  );
}
