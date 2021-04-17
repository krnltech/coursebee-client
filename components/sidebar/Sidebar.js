import Link from "next/link";
import classNames from "classnames";

const Sidebar = () => {
  return (
    <>
      <div
        className={classNames(
          "bg-dark",
          "text-white",
          "border-right",
          "border-white"
        )}
        id="sidebar-wrapper"
      >
        <div className="sidebar-heading">Mentor Dashborad</div>

        <div id="sidebar-wrapper">
          <div className="list-group list-group-flush">
            {/* Dashboard */}
            <Link href="/mentor-dashboard">
              <a
                className={classNames(
                  "list-group-item",
                  "list-group-item-action",
                  "bg-dark",
                  "text-white",
                  "border-bottom"
                )}
              >
                Dashboard
              </a>
            </Link>
            {/* About  */}
            <Link href="/mentor-dashboard/about">
              <a
                className={classNames(
                  "list-group-item",
                  "list-group-item-action",
                  "bg-dark",
                  "text-white",
                  "border-bottom"
                )}
              >
                About
              </a>
            </Link>
            <Link href="/mentor-dashboard/course-upload">
              <a
                className={classNames(
                  "list-group-item",
                  "list-group-item-action",
                  "bg-dark",
                  "text-white",
                  "border-bottom"
                )}
              >
                Course Upload
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
