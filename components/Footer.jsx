import React from "react";

export default function Footer() {
  return (
    <footer class="bg-teal-400 py-5">
      <h1 class="text-base text-color-gray-light text-center">©{new Date().getFullYear()} - Inertia. All right reserved</h1>
    </footer>
  );
};
