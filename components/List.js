import { items } from "./data";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ setSelected, item }) => {
  return (
    <div className="inline-block w-full mb-4">
      <motion.img
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        src={item.url}
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer"
      />
      <div className="flex flex-wrap mt-2">
        {item.tags.map((tag) => {
          return (
            <div
              className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
              key={tag}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function List({ setSelected }) {
  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-4xl mb-8">Your Images</h1>
      <div className="columns-2 md:columns-3 xl:columns-4 gap-4">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
}
