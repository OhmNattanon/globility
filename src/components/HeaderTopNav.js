import React from "react";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { US, JP, TH } from "country-flag-icons/react/3x2";
import Button from "./Button";

const people = [{ name: "English" }, { name: "Japanese" }, { name: "Thai" }];
function MyListbox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className=" w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex ">
              {selected.name === "English" ? (
                <div className="mr-3">
                  <US width={20} height={20} />
                </div>
              ) : selected.name === "Japanese" ? (
                <div className="mr-3">
                  <JP width={20} height={20} />
                </div>
              ) : (
                <div className="mr-3">
                  <TH width={20} height={20} />
                </div>
              )}

              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

function HeaderTopNav() {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-3 bg-black flex flex-col pb-6">
          <h1 className="logo_shadow_sm">GLOBILITY</h1>
          <p
            className="text-white"
            style={{ marginLeft: "15vw", marginTop: "-20px" }}
          >
            TagLine
          </p>
        </div>
        <div className="col-span-1 bg-slate-100 relative">
          <div
            className="rounded-full bg-black absolute"
            style={{ top: -46, left: -77, width: 219, height: 176 }}
          >
            e
          </div>
        </div>
        <div className="col-span-2 bg-slate-100 flex items-center gap-4">
          <MyListbox />
          <Button type="secondary" title="Sign in" size="h4" />
        </div>
      </div>
      <div className=" bg-main-blue relative" style={{ height: "90vh" }}>
        <h1
          className="absolute top-48 text-white ml-20"
          style={{ fontSize: 200 }}
        >
          SIGN-UP
        </h1>
        <div className="absolute" style={{ top: "28rem", left: "48rem" }}>
          <h1 className="text-white">
            <Emoji symbol="👉" />I am a student
          </h1>
          <h1 className="text-white">
            <Emoji symbol="👉" />I am a tutor
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeaderTopNav;
