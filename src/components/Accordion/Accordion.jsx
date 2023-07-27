import AccordionList from "./AccordionList";

/* import Accordion component */

/* import data to use */
import { accordions } from "./Data";

function Accordion() {
  return (
    <div className="wrapper p-4 bg-slate-500 text-gray-800 block lg:hidden ">
      {/* main content here */}
      <div className="max-w-[700px] w-full mx-auto  flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {/* passing two props to this component */}
              <AccordionList
                question={question}
                answer={answer}
              ></AccordionList>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
