import React, { useState } from "react";

const Sidebar = ({ isOpen }) => {
    const [subMenu, setSubMenu] = useState(false)
  return (
    <>
      <div
        id="hs-sidebar-header"
        class={`hs-overlay  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ${isOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'} z-50-translate-x-full transition-all duration-300 transform
h-full
hidden
fixed top-0 start-0 bottom-0 z-60
bg-white border-e border-gray-200 d:bg-neutral-800 d:border-neutral-700`}
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
      >
        <div class="relative flex flex-col h-full max-h-full ">
          <header class="p-4 flex justify-between items-center gap-x-2">
            <a
              class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 d:text-white"
              href="#"
              aria-label="Brand"
            >
              Samuella
            </a>

            <div class="lg:hidden -me-2">
              <button
                type="button"
                onClick={() => setSubMenu(!subMenu)}
                class="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:border-neutral-700 d:text-neutral-400 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:hover:text-neutral-200 d:focus:text-neutral-200"
                data-hs-overlay="#hs-sidebar-header"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="sr-only">Close</span>
              </button>
            </div>
          </header>

          <div class="mt-auto p-2 border-y border-gray-200 d:border-neutral-700">
            <div class=" relative w-full inline-flex">
              <button
                id="hs-sidebar-header-example-with-dropdown"
                type="button"
                class="w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:text-neutral-200 d:hover:bg-neutral-700 d:focus:bg-neutral-700"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  class="shrink-0 size-5 rounded-full"
                  src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                />
                hey Sam
                <svg
                  class="shrink-0 size-3.5 ms-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </button>

              <div
                class=" w-60 transition-[opacity,margin] duration opacity-100 hidden  z-20 bg-white border border-gray-200 rounded-lg shadow-lg d:bg-neutral-900 d:border-neutral-700"
                    >
                <div class="p-1">
                  <a
                    class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 d:text-neutral-300 d:hover:bg-neutral-800 d:focus:bg-neutral-800"
                    href="#"
                  >
                    My account
                  </a>
                  <a
                    class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 d:text-neutral-300 d:hover:bg-neutral-800 d:focus:bg-neutral-800"
                    href="#"
                  >
                    Settings
                  </a>
                  <a
                    class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 d:text-neutral-300 d:hover:bg-neutral-800 d:focus:bg-neutral-800"
                    href="#"
                  >
                    Billing
                  </a>
                  <a
                    class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 d:text-neutral-300 d:hover:bg-neutral-800 d:focus:bg-neutral-800"
                    href="#"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 d:[&::-webkit-scrollbar-track]:bg-neutral-700 d:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div
              class="hs-accordion-group pb-0 px-2 pt-2 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul class="space-y-1">
                <li>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-700 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-white"
                    href="#"
                  >
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>

                <li class="hs-accordion" id="users-accordion">
                  <button
                    type="button"
                    class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                    aria-expanded="true"
                    aria-controls="users-accordion-collapse-1"
                  >
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Users
                    <svg
                      class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-collapse-1"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="users-accordion"
                  >
                    <ul
                      class="hs-accordion-group pt-1 ps-7 space-y-1"
                      data-hs-accordion-always-open
                    >
                      <li class="hs-accordion" id="users-accordion-sub-1">
                        <button
                          type="button"
                          class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                          aria-expanded="true"
                          aria-controls="users-accordion-sub-1-collapse-1"
                        >
                          Sub Menu 1
                          <svg
                            class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                          <svg
                            class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          id="users-accordion-sub-1-collapse-1"
                          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion-sub-1"
                        >
                          <ul class="pt-1 ps-2 space-y-1">
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="hs-accordion" id="users-accordion-sub-2">
                        <button
                          type="button"
                          class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                          aria-expanded="true"
                          aria-controls="users-accordion-sub-2-collapse-1"
                        >
                          Sub Menu 2
                          <svg
                            class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                          <svg
                            class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 d:text-neutral-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          id="users-accordion-sub-2-collapse-1"
                          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion-sub-2"
                        >
                          <ul class="pt-1 ps-2 space-y-1">
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 d:bg-neutral-800 d:hover:bg-neutral-700 d:focus:bg-neutral-700 d:text-neutral-200"
                    href="#"
                  >
                    <svg
                      class="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
