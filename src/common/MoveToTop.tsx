"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
const MoveToTop = () => {
  return (
    <Link
      href=""
      className="fixed bottom-10 right-10 flex items-center bg-gray-800 justify-center flex-col w-14 h-14 z-50 rounded-full text-white border-2 border-white"
    >
      <span className="animate-pulse">
        <ArrowUpwardIcon />
      </span>
    </Link>
  );
};

export default MoveToTop;
