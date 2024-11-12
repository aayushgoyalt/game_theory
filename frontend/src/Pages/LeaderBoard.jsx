import React from "react";
import { useRef, useEffect } from "react";
import styles from "./Leaderboard.module.css";
const LeaderBoard = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("filterDropdown");
    dropdown.classList.toggle("show");
  };
  const filterRef = useRef(null);

  // useEffect(() => {
  //  filterRef.classList.toggle("show");
  //}, []);

  return (
    <div className="bg-gray-100">
      <header></header>

      <div className={`${styles.championsSection}`}>
        <div className="text-5xl lg:text-8xl font-bold text-gray-300 mb-4">
          LEADERBOARD
        </div>
        <div className={styles.backgroundText}>
          <div className={`${styles.text}`}>XXXX</div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto" style={{ marginTop: "-20px" }}>
          <div className={`grid gap-4 mb-4 justify-center ${styles.maingrid}`}>
            {/* Card 1 */}
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div
                className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}
              >
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure, omit for brevity */}
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div
                className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}
              >
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>

            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div
                className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}
              >
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}>
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}>
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}>
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}>
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure
            <div
              className={`bg-white rounded-lg shadow-lg ${styles.card}`}
              style={{ width: "300px", height: "350px" }}
            >
              <div className={`${styles.cardHeader} flex items-center justify-between px-3 md:px-5 py-3 md:py-4`}>
                <div className={`${styles.hexagon} mt-24`}>
                  <div className={`${styles.hexagonInner}`}>
                    <img src="avatar.png" alt="Profile Picture" />
                  </div>
                </div>
                <div className="text-gray-500 text-4xl md:text-5xl italic">
                  1st
                </div>
              </div>
              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-xl font-bold mt-5 flex">
                    Roger Korsgaard
                    <i className="mdi mdi-check-decagram tick-icon wavy-border"></i>
                  </h2>
                </div>
                <p className="mb-4 flex" style={{ color: "#01a9f4" }}>
                  Day Trader
                </p>
                <div className="flex justify-between">
                  <div>20</div>
                  <div>497</div>
                  <div>90%</div>
                </div>
                <div className="flex justify-between text-gray-500">
                  <div className="text-sm">Alerts</div>
                  <div className="text-sm">Trades</div>
                  <div className="text-sm">Avg Gain</div>
                </div>
                <button className="mt-4 md:mt-5 w-full py-3 md:py-2 bg-gray-100 text-black rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition duration-200 ease-in-out transform hover:scale-105 text-sm">
                  Profile
                </button>
              </div>
            </div>
            {/* Card 2 and 3: Similar structure
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 w-full">
              {/* Stat 1 */}
              <div
                className={`${styles.statsss} py-2 bg-white rounded-lg shadow-md text-center`}
              >
                <div className="flex justify-between items-center mx-3">
                  <img
                    src="avatar.png"
                    alt="Profile Image"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-sm text-gray-500">Most Tips Given</h3>
                    <p className="font-semibold">Cristofer G.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold italic mt-2">129</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.statsss} py-2 bg-white rounded-lg shadow-md text-center`}
              >
                <div className="flex justify-between items-center mx-3">
                  <img
                    src="avatar.png"
                    alt="Profile Image"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-sm text-gray-500">Most Tips Given</h3>
                    <p className="font-semibold">Cristofer G.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold italic mt-2">129</p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.statsss} py-2 bg-white rounded-lg shadow-md text-center`}
              >
                <div className="flex justify-between items-center mx-3">
                  <img
                    src="avatar.png"
                    alt="Profile Image"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-sm text-gray-500">Most Tips Given</h3>
                    <p className="font-semibold">Cristofer G.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold italic mt-2">129</p>
                  </div>
                </div>
              </div>
              {/* Stat 2, 3, and 4: Similar structure, omit for brevity */}
            </div>
            {/* searchbar */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LeaderBoard;
