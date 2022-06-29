import { useState } from "react";
import Note from "./components/Note";
import NoteList from "./components/NoteList";
import Topbar from "./components/Topbar";

const list = [
  {
    id: 0,
    title: "Note 01 this is the title for the note 01!!1!",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec nisl arcu, semper vitae neque sed, varius rhoncus nisi. Donec commodo porttitor dui id pretium. Aenean pharetra tortor id sem commodo facilisis. Donec vulputate quam massa, quis pharetra nibh faucibus a. Duis porta metus sit amet tortor cursus posuere eget eu tellus. Aliquam sit amet volutpat lorem, in ultrices dolor. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, semper vitae neque sed, varius rhoncus nisi. Donec commodo porttitor dui id pretium. Aenean pharetra tortor id sem commodo facilisis. Donec vulputate quam massa, quis pharetra nibh faucibus a. Duis porta metus sit amet tortor cursus posuere eget eu tellus. Aliquam sit amet volutpat lorem, in ultrices dolor. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, semper vitae neque sed, varius rhoncus nisi. Donec commodo porttitor dui id pretium. Aenean pharetra tortor id sem commodo facilisis. Donec vulputate quam massa, quis pharetra nibh faucibus a. Duis porta metus sit amet tortor cursus posuere eget eu tellus. Aliquam sit amet volutpat lorem, in ultrices dolor. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.",
  },
  {
    id: 1,
    title: "Note 02",
    text: "Lorem ipsum dolor sit amet Duis porta metus sit amet tortor cursus posuere eget eu tellus. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.",
  },
  {
    id: 2,
    title: "Note 03",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, semper vitae neque sed, varius rhoncus nisi. Donec commodo porttitor dui id pretium. Aenean pharetra tortor id sem commodo facilisis. Donec vulputate quam massa, quis pharetra nibh faucibus a. Duis porta metus sit amet tortor cursus posuere eget eu tellus. Aliquam sit amet volutpat lorem, in ultrices dolor. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.",
  },
  {
    id: 3,
    title: "Note 04",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, semper vitae neque sed, varius rhoncus nisi. Donec commodo porttitor dui id pretium. Aenean pharetra tortor id sem commodo facilisis. Donec vulputate quam massa, quis pharetra nibh faucibus a. Duis porta metus sit amet tortor cursus posuere eget eu tellus. Aliquam sit amet volutpat lorem, in ultrices dolor. Morbi sit amet condimentum diam. Sed in ornare dui, tincidunt hendrerit lorem. Aliquam tincidunt bibendum neque eget convallis. In at vestibulum risus, in sollicitudin augue. In non mollis velit. Donec blandit nunc cursus, lobortis felis at, tincidunt turpis.",
  },
];

function App() {
  return (
    <div className='App mx-20'>
      <Topbar />
      <NoteList noteList={list} />
    </div>
  );
}

export default App;
