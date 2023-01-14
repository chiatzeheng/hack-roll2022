import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ScrollContainer, 
  ScrollPage, 
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Navbar from "../components/Navbar";
import Count from "../components/Count";

import transactionsData from "../../data/transactions.json";

export default function Transactions() {
  const [balance, setBalance] = useState("69,420");
  const [dollars, setDollars] = useState(0);
  const [cents, setCents] = useState(0);

  const [formData, setFormData] = useState({
    day: "",
    week: "",
    month: ""
  })

  const [recommended, setRecommended] = useState({
    perDay: "",
    perWeek: "",
    perMonth: ""
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name] :e.target.value});
    switch (true) {
      case (e.target.name === "day"):
        setRecommended({
          perDay: e.target.value,
          perWeek: (e.target.value * 7).toFixed(2),
          perMonth: (e.target.value * 31).toFixed(2),
        })
        break;
      case (e.target.name === "week"):
        setRecommended({
          perDay: (e.target.value / 7).toFixed(2),
          perWeek: e.target.value,
          perMonth: (e.target.value * 4.34524).toFixed(2),
        })
        break;
      case (e.target.name === "month"):
        setRecommended({
          perDay: (e.target.value / 31).toFixed(2),
          perWeek: (e.target.value / 4.34524).toFixed(2),
          perMonth: e.target.value,
        })
        break;
    }
  }

  let money = String(balance).split(".");
  useEffect(() => {
    if (money[0] != undefined) {
      setDollars(money[0]);
    }
    if (money[1] != undefined) {
      setCents(money[1]);
    }
  }, [money])

  // const ref = useRef(null);
  // const isInView = useInView(ref);

  
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress)

  // const stats = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0
  //   }
  // }

  return (
    <>
      <Navbar />
      <div>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(0, 1))}>
              <motion.div className="flex-col">
                <div className="relative flex items-center justify-center min-h-fit">
                  <img className="absolute m-10 w-60 transition ease-in-out hover:scale-105 top-1 shadow-2xl z-50 rounded-full place-items-center outline outline-4 outline-offset-4 outline-green-600" src="../icons/pfp.jpg" />
                </div>
                <div className="flex items-center justify-center min-h-fit mt-60">
                  <div className="p-10 px-20 shadow-2xl z-0 rounded-lg bg-green-600 text-center text-white">
                    <p className="stat-title pt-5 text-5xl text-white">Available Balance</p>
                    <p className="stat-value pt-2 text-9xl text-white">${balance}</p>
                    <p className="stat-desc pt-3 text-2xl text-white">21% more than last month</p>
                    <div className="stat-actions">
                      <button className="btn btn-lg mx-1 hover:scale-105" href="">Recent Transactions</button>
                      <Link to="/Transactions">
                        <button className="btn btn-lg mx-1 hover:scale-105" href="">Transaction History</button>
                      </Link>
                      <Link to="#spendingHabits">
                        <button className="btn btn-lg mx-1 hover:scale-105" href="spendingHabits">Spending Habits</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>  
      </div>
      <div>
        <h1 id="spendingHabits">
          Spending Habits
        </h1>
        <h1>
          Set Spending Goals!
        </h1>
        <form className="flex-col">
          <label className="flex">
            Total per Day
            <div className="mx-10">
              <input 
                className="flex" 
                type="number" 
                name="day" 
                placeholder={"Rec $" + recommended.perDay} 
                onChange={handleChange} 
              />
            </div>
          </label>
          <label className="flex">
            Total per Week
            <input 
              className="flex" 
              type="number" 
              name="week" 
              placeholder={"Rec $" + recommended.perWeek}
              onChange={handleChange} 
            />
          </label>
          <label className="flex">
            Total per Month
            <input 
              className="flex" 
              type="number" 
              name="month" 
              placeholder={"Rec $" + recommended.perMonth} 
              onChange={handleChange} 
            />
          </label>
        </form>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan tellus sit amet nisi pharetra, sit amet viverra quam pharetra. Aenean at elit ut ligula congue pretium. Mauris tincidunt consequat eleifend. Donec porta eget sem sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus commodo molestie finibus. Phasellus erat mauris, vestibulum sed mattis at, viverra tincidunt erat. Ut laoreet ut mi sit amet luctus.

Pellentesque at tellus magna. Suspendisse neque est, lobortis in ornare vestibulum, cursus et sapien. Sed a cursus diam. Praesent sagittis ligula arcu, ac scelerisque diam finibus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, neque ut tincidunt ultricies, velit magna tincidunt velit, in auctor tellus ligula sed risus. Ut sapien odio, cursus vel tincidunt consectetur, tincidunt vitae nisl. Nullam ut nisi condimentum, tempor nulla eu, consequat est. Nam fringilla pretium pellentesque. Cras blandit lectus sed diam dictum consequat. Maecenas quis cursus justo, et pharetra nisl. Etiam eu vehicula nibh, id convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sagittis leo nec ex ultrices, nec euismod dolor facilisis. Aenean aliquam tristique lacus sed rutrum.

Fusce dui lectus, aliquam tempus ipsum vel, laoreet congue risus. Ut in magna sem. Nunc in blandit tellus. Curabitur dictum consectetur lectus quis pulvinar. Ut vel dui tincidunt, interdum est ac, viverra odio. Suspendisse cursus mattis dui, non commodo nunc vulputate a. Suspendisse imperdiet urna eget magna dignissim dignissim. Aenean dignissim vestibulum lectus, et pellentesque diam tempor id. Duis aliquam pellentesque erat condimentum maximus. Sed vitae vehicula magna. Donec consequat justo at sem fringilla faucibus. Mauris varius tortor in nisi tempor vulputate. Maecenas rhoncus iaculis consectetur. Etiam vel lectus augue.

Sed efficitur dolor nisl, at scelerisque massa dictum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ullamcorper libero arcu, laoreet condimentum urna tincidunt quis. Aenean et nisi et est posuere dictum quis sit amet lacus. Praesent id quam consectetur, dignissim nisi at, laoreet dui. Nunc sed magna ultrices, consectetur purus at, rutrum mauris. Vivamus convallis tempor risus, sed fermentum sem consequat id. Morbi tincidunt elementum hendrerit. Nam placerat, ante vitae dignissim sollicitudin, erat orci ultricies ante, nec lobortis orci neque nec justo. Sed pharetra orci ut gravida dapibus. Quisque accumsan, libero tincidunt maximus suscipit, sapien tellus fermentum magna, eu interdum ligula mi quis sem. Sed et viverra elit.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in molestie ligula. In elementum quam in mi interdum, in tempor neque vestibulum. Duis quis tellus tempus, volutpat erat vel, faucibus turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porta sit amet orci sed fermentum. Nullam sed gravida mauris, vestibulum dictum odio. Phasellus vel magna consectetur orci cursus ornare. Suspendisse eleifend finibus fringilla. Morbi congue libero in pharetra suscipit. Nulla ac lectus pulvinar, tincidunt metus a, semper tellus. Cras enim nisi, posuere at ultrices vel, facilisis placerat nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan tellus sit amet nisi pharetra, sit amet viverra quam pharetra. Aenean at elit ut ligula congue pretium. Mauris tincidunt consequat eleifend. Donec porta eget sem sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus commodo molestie finibus. Phasellus erat mauris, vestibulum sed mattis at, viverra tincidunt erat. Ut laoreet ut mi sit amet luctus.

Pellentesque at tellus magna. Suspendisse neque est, lobortis in ornare vestibulum, cursus et sapien. Sed a cursus diam. Praesent sagittis ligula arcu, ac scelerisque diam finibus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, neque ut tincidunt ultricies, velit magna tincidunt velit, in auctor tellus ligula sed risus. Ut sapien odio, cursus vel tincidunt consectetur, tincidunt vitae nisl. Nullam ut nisi condimentum, tempor nulla eu, consequat est. Nam fringilla pretium pellentesque. Cras blandit lectus sed diam dictum consequat. Maecenas quis cursus justo, et pharetra nisl. Etiam eu vehicula nibh, id convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sagittis leo nec ex ultrices, nec euismod dolor facilisis. Aenean aliquam tristique lacus sed rutrum.

Fusce dui lectus, aliquam tempus ipsum vel, laoreet congue risus. Ut in magna sem. Nunc in blandit tellus. Curabitur dictum consectetur lectus quis pulvinar. Ut vel dui tincidunt, interdum est ac, viverra odio. Suspendisse cursus mattis dui, non commodo nunc vulputate a. Suspendisse imperdiet urna eget magna dignissim dignissim. Aenean dignissim vestibulum lectus, et pellentesque diam tempor id. Duis aliquam pellentesque erat condimentum maximus. Sed vitae vehicula magna. Donec consequat justo at sem fringilla faucibus. Mauris varius tortor in nisi tempor vulputate. Maecenas rhoncus iaculis consectetur. Etiam vel lectus augue.

Sed efficitur dolor nisl, at scelerisque massa dictum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ullamcorper libero arcu, laoreet condimentum urna tincidunt quis. Aenean et nisi et est posuere dictum quis sit amet lacus. Praesent id quam consectetur, dignissim nisi at, laoreet dui. Nunc sed magna ultrices, consectetur purus at, rutrum mauris. Vivamus convallis tempor risus, sed fermentum sem consequat id. Morbi tincidunt elementum hendrerit. Nam placerat, ante vitae dignissim sollicitudin, erat orci ultricies ante, nec lobortis orci neque nec justo. Sed pharetra orci ut gravida dapibus. Quisque accumsan, libero tincidunt maximus suscipit, sapien tellus fermentum magna, eu interdum ligula mi quis sem. Sed et viverra elit.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in molestie ligula. In elementum quam in mi interdum, in tempor neque vestibulum. Duis quis tellus tempus, volutpat erat vel, faucibus turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porta sit amet orci sed fermentum. Nullam sed gravida mauris, vestibulum dictum odio. Phasellus vel magna consectetur orci cursus ornare. Suspendisse eleifend finibus fringilla. Morbi congue libero in pharetra suscipit. Nulla ac lectus pulvinar, tincidunt metus a, semper tellus. Cras enim nisi, posuere at ultrices vel, facilisis placerat nisl.</p>
      </div>
    </>
  );
}
