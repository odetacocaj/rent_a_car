"use client";
import { Listbox } from "@headlessui/react";
import { manufacturerModels } from "@/constants";
import { useState } from "react";

interface SearchModelProps {
  model: string;
  setModel: (value: string) => void;
  manufacturer: string;
}

function SearchModel({ model, setModel, manufacturer }: SearchModelProps) {
  const models = manufacturer ? manufacturerModels[manufacturer] || [] : [];

  return (
    <div className="relative">
      <Listbox value={model} onChange={setModel}>
        <div className="relative">
          <Listbox.Button className="search-model__button">
            {model || "Select model"}
          </Listbox.Button>
          <Listbox.Options className="search-model__dropdown">
            {models.length === 0 ? (
              <Listbox.Option value="" disabled className="search-model__option">
                No models available
              </Listbox.Option>
            ) : (
              models.map((item) => (
                <Listbox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `search-model__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </Listbox.Option>
              ))
            )}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default SearchModel;
