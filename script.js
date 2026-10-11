/* =============================================
   YODHARAJA PORTFOLIO — INTERACTIVE ENGINE
   Dynamic JSON Projects, SkillIcons & Core Logic
   ============================================= */

// ===== OFFICIAL SKILLICONS SVG LOOKUP =====
// Instant, offline, crisp rendering for primary stack.
// Any extra slug dynamically resolves via https://skillicons.dev/icons?i=${slug}
const SKILL_ICONS = {
  cpp: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#00599C" rx="60"/><path fill="#fff" d="M110.759 210.517C65.1254 210.517 28 173.392 28 127.759C28 82.1254 65.1254 45 110.759 45C140.204 45 167.667 60.8458 182.427 86.3533L146.611 107.079C139.224 94.3111 125.485 86.3793 110.759 86.3793C87.9416 86.3793 69.3793 104.942 69.3793 127.759C69.3793 150.575 87.9416 169.138 110.759 169.138C125.486 169.138 139.225 161.206 146.613 148.436L182.429 169.161C167.669 194.671 140.206 210.517 110.759 210.517Z"/><path fill="#fff" d="M193.517 123.161H184.321V113.965H175.127V123.161H165.931V132.356H175.127V141.552H184.321V132.356H193.517V123.161Z"/><path fill="#fff" d="M228 123.161H218.804V113.965H209.61V123.161H200.414V132.356H209.61V141.552H218.804V132.356H228V123.161Z"/></svg>`,
  'c++': `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#00599C" rx="60"/><path fill="#fff" d="M110.759 210.517C65.1254 210.517 28 173.392 28 127.759C28 82.1254 65.1254 45 110.759 45C140.204 45 167.667 60.8458 182.427 86.3533L146.611 107.079C139.224 94.3111 125.485 86.3793 110.759 86.3793C87.9416 86.3793 69.3793 104.942 69.3793 127.759C69.3793 150.575 87.9416 169.138 110.759 169.138C125.486 169.138 139.225 161.206 146.613 148.436L182.429 169.161C167.669 194.671 140.206 210.517 110.759 210.517Z"/><path fill="#fff" d="M193.517 123.161H184.321V113.965H175.127V123.161H165.931V132.356H175.127V141.552H184.321V132.356H193.517V123.161Z"/><path fill="#fff" d="M228 123.161H218.804V113.965H209.61V123.161H200.414V132.356H209.61V141.552H218.804V132.356H228V123.161Z"/></svg>`,
  java: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M101.634 182.619C101.634 182.619 93.9548 187.293 106.979 188.63C122.707 190.634 131.023 190.299 148.386 186.962C148.386 186.962 153.06 189.971 159.406 192.306C120.331 209.002 70.9089 191.304 101.634 182.619ZM96.6252 160.914C96.6252 160.914 88.2753 167.26 101.299 168.593C118.327 170.262 131.69 170.597 154.732 165.926C154.732 165.926 157.741 169.267 162.747 170.936C115.664 184.961 62.8975 172.269 96.6252 160.917V160.914ZM188.795 198.984C188.795 198.984 194.471 203.658 182.449 207.334C160.073 214.012 88.6104 216.019 68.5735 207.334C61.564 204.325 74.9197 199.982 79.2587 199.319C83.6012 198.317 85.9366 198.317 85.9366 198.317C78.2569 192.973 34.8424 209.337 63.8959 214.046C143.709 227.073 209.499 208.37 188.792 199.018L188.795 198.984ZM105.307 138.203C105.307 138.203 68.9052 146.888 92.2793 149.89C102.298 151.223 122 150.892 140.368 149.555C155.396 148.221 170.458 145.548 170.458 145.548C170.458 145.548 165.113 147.886 161.441 150.222C124.342 159.915 53.2107 155.573 73.5827 145.554C90.9526 137.204 105.307 138.203 105.307 138.203V138.203ZM170.423 174.604C207.83 155.234 190.46 136.534 178.438 138.873C175.429 139.54 174.096 140.207 174.096 140.207C174.096 140.207 175.097 138.203 177.436 137.54C201.145 129.19 219.849 162.586 169.757 175.61C169.757 175.61 170.092 175.275 170.423 174.608V174.604ZM108.979 227.364C145.046 229.703 200.147 226.03 201.484 208.995C201.484 208.995 198.817 215.673 171.764 220.683C141.042 226.359 102.968 225.692 80.5957 222.016C80.5957 222.016 85.2698 226.023 108.982 227.36L108.979 227.364Z"/><path fill="#F58219" d="M147.685 28C147.685 28 168.389 49.0388 127.983 80.7594C95.5891 106.472 120.632 121.168 127.983 137.861C108.948 120.833 95.2609 105.802 104.606 91.7762C118.331 71.0828 156.062 61.0644 147.685 28ZM137 123.842C146.683 134.862 134.333 144.881 134.333 144.881C134.333 144.881 159.044 132.195 147.692 116.494C137.338 101.466 129.324 94.1184 172.738 69.0689C172.738 69.0689 104.278 86.0968 137.007 123.835L137 123.842Z"/></svg>`,
  py: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#p_py_g0)" d="M127.279 29C76.5066 29 79.6772 51.018 79.6772 51.018L79.7338 73.8284H128.185V80.6772H60.4893C60.4893 80.6772 28 76.9926 28 128.222C28 179.452 56.3573 177.636 56.3573 177.636H73.2812V153.863C73.2812 153.863 72.369 125.506 101.186 125.506H149.24C149.24 125.506 176.239 125.942 176.239 99.4123V55.5461C176.239 55.5461 180.338 29 127.279 29ZM100.563 44.339C105.384 44.339 109.28 48.2351 109.28 53.0556C109.28 57.8761 105.384 61.7723 100.563 61.7723C95.7426 61.7723 91.8465 57.8761 91.8465 53.0556C91.8465 48.2351 95.7426 44.339 100.563 44.339Z"/><path fill="url(#p_py_g1)" d="M128.721 227.958C179.493 227.958 176.323 205.941 176.323 205.941L176.266 183.13H127.815V176.281H195.511C195.511 176.281 228 179.966 228 128.736C228 77.5062 199.643 79.323 199.643 79.323H182.719V103.096C182.719 103.096 183.631 131.453 154.814 131.453H106.76C106.76 131.453 79.7607 131.016 79.7607 157.546V201.412C79.7607 201.412 75.6615 227.958 128.721 227.958ZM155.437 212.619C150.616 212.619 146.72 208.723 146.72 203.903C146.72 199.082 150.616 195.186 155.437 195.186C160.257 195.186 164.154 199.082 164.154 203.903C164.154 208.723 160.257 212.619 155.437 212.619Z"/><defs><linearGradient id="p_py_g0" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="p_py_g1" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>`,
  python: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#p_py_g0_b)" d="M127.279 29C76.5066 29 79.6772 51.018 79.6772 51.018L79.7338 73.8284H128.185V80.6772H60.4893C60.4893 80.6772 28 76.9926 28 128.222C28 179.452 56.3573 177.636 56.3573 177.636H73.2812V153.863C73.2812 153.863 72.369 125.506 101.186 125.506H149.24C149.24 125.506 176.239 125.942 176.239 99.4123V55.5461C176.239 55.5461 180.338 29 127.279 29ZM100.563 44.339C105.384 44.339 109.28 48.2351 109.28 53.0556C109.28 57.8761 105.384 61.7723 100.563 61.7723C95.7426 61.7723 91.8465 57.8761 91.8465 53.0556C91.8465 48.2351 95.7426 44.339 100.563 44.339Z"/><path fill="url(#p_py_g1_b)" d="M128.721 227.958C179.493 227.958 176.323 205.941 176.323 205.941L176.266 183.13H127.815V176.281H195.511C195.511 176.281 228 179.966 228 128.736C228 77.5062 199.643 79.323 199.643 79.323H182.719V103.096C182.719 103.096 183.631 131.453 154.814 131.453H106.76C106.76 131.453 79.7607 131.016 79.7607 157.546V201.412C79.7607 201.412 75.6615 227.958 128.721 227.958ZM155.437 212.619C150.616 212.619 146.72 208.723 146.72 203.903C146.72 199.082 150.616 195.186 155.437 195.186C160.257 195.186 164.154 199.082 164.154 203.903C164.154 208.723 160.257 212.619 155.437 212.619Z"/><defs><linearGradient id="p_py_g0_b" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="p_py_g1_b" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>`,
  kotlin: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="60" fill="#242938"/><path d="M218 218H38V38H218L128 128L218 218Z" fill="url(#p_kt_g)"/><defs><linearGradient id="p_kt_g" x1="218" y1="38" x2="38" y2="218" gradientUnits="userSpaceOnUse"><stop offset="0.00343514" stop-color="#E44857"/><stop offset="0.4689" stop-color="#C711E1"/><stop offset="1" stop-color="#7F52FF"/></linearGradient></defs></svg>`,
  androidstudio: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="60" fill="#242938"/><path d="M107.028 48.8181H60.7888C51.5798 48.8181 44.0108 56.6801 44.0108 66.4151C43.6818 75.8111 50.9178 83.6701 59.9698 84.0111H107.522L107.028 48.8181Z" fill="#073042"/><path d="M211.835 205.303H60.7887C51.4147 205.303 44.0107 197.445 44.0107 187.707V66.2461C44.0107 75.9821 51.5797 83.8411 60.7887 84.0111H187.321C187.321 84.0111 212 81.7931 212 101.097V205.303H211.835Z" fill="#4285F4"/><path d="M141.413 143.12C148.159 137.825 149.475 127.917 144.379 121.082C141.579 117.324 137.301 114.933 132.692 114.761H133.186C134.011 114.591 134.997 114.591 135.823 114.761V105.024C135.823 103.828 135.327 102.803 134.34 102.292C132.858 101.437 131.049 101.95 130.227 103.487C129.897 104 129.733 104.512 129.897 105.195V115.102C121.671 116.469 115.912 124.499 117.225 133.213V133.383C117.886 137.483 120.027 141.242 123.316 143.633L95.5088 205.474H113.609L126.441 177.116C127.925 173.698 131.872 172.162 135.327 173.87C136.646 174.554 137.795 175.749 138.453 177.116L151.783 205.474H170.209L141.413 143.12ZM132.036 140.387C126.77 140.387 122.657 135.945 122.657 130.48C122.657 125.011 126.935 120.741 132.199 120.911C134.667 120.911 136.81 121.937 138.617 123.647C142.401 127.403 142.401 133.554 138.781 137.483C137.137 139.192 134.667 140.387 132.036 140.387Z" fill="#3870B2"/></svg>`,
  html: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"/><path fill="#EBEBEB" d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"/><path fill="#EBEBEB" d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"/></svg>`,
  css: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="60" fill="#0277BD"/><path d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z" fill="#EBEBEB"/><path d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z" fill="#EBEBEB"/><path d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z" fill="#EBEBEB"/><path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill="white"/></svg>`,
  js: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="60" fill="#F0DB4F"/><path d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93" fill="#323330"/><path d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330"/></svg>`,
  javascript: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="60" fill="#F0DB4F"/><path d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93" fill="#323330"/><path d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330"/></svg>`,
  nodejs: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#81CD39" d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"/><path fill="#81CD39" d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"/></svg>`,
  cloudflare: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M79 171.75H211.356V135.125L186.212 120.706L181.875 118.831L79 119.537V171.75Z"/><path fill="#F38020" d="M165.575 166.887C166.806 162.669 166.338 158.8 164.288 155.925C162.413 153.287 159.244 151.762 155.438 151.587L83.2813 150.65C82.8125 150.65 82.4063 150.412 82.1688 150.062C81.9313 149.712 81.875 149.25 81.9938 148.775C82.2313 148.069 82.9313 147.544 83.6938 147.487L156.494 146.55C165.119 146.137 174.494 139.162 177.769 130.612L181.931 119.769C182.115 119.323 182.158 118.833 182.056 118.362C177.369 97.1437 158.431 81.3187 135.806 81.3187C114.931 81.3187 97.2438 94.8 90.9063 113.506C86.8 110.456 81.5313 108.819 75.9563 109.344C65.9313 110.344 57.8313 118.369 56.9063 128.394C56.6634 130.887 56.8408 133.403 57.4313 135.837C49.5447 136.051 42.0537 139.337 36.5556 144.995C31.0574 150.653 27.9874 158.236 28 166.125C28 167.587 28.125 169.062 28.2938 170.519C28.4188 171.225 29 171.75 29.7 171.75H162.875C163.258 171.743 163.629 171.614 163.934 171.383C164.24 171.151 164.464 170.829 164.575 170.462L165.575 166.887V166.887Z"/><path fill="#FAAE40" d="M188.55 120.519L186.55 120.581C186.081 120.581 185.675 120.931 185.487 121.394L182.675 131.181C181.444 135.4 181.912 139.269 183.962 142.144C185.837 144.781 189.006 146.306 192.812 146.481L208.169 147.419C208.637 147.419 209.044 147.656 209.281 148.006C209.519 148.356 209.575 148.881 209.456 149.294C209.219 150 208.519 150.525 207.756 150.581L191.756 151.519C183.081 151.931 173.756 158.906 170.481 167.456L169.306 170.444C169.069 171.031 169.481 171.619 170.119 171.619H225.1C225.418 171.623 225.729 171.522 225.983 171.331C226.238 171.14 226.422 170.869 226.506 170.562C227.481 167.096 227.983 163.513 228 159.912C227.97 149.465 223.802 139.454 216.409 132.072C209.015 124.69 198.998 120.538 188.55 120.525"/></svg>`,
  mongodb: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10AA50" d="M171.173 107.591C160.636 61.1097 138.676 48.7357 133.074 39.9886C130.764 36.1353 128.717 32.1299 126.949 28C126.653 32.1292 126.109 34.7307 122.599 37.862C115.552 44.1454 85.6217 68.5354 83.1028 121.348C80.756 170.59 119.303 200.953 124.395 204.092C128.311 206.019 133.08 204.133 135.407 202.364C153.988 189.612 179.376 155.614 171.193 107.591"/><path fill="#B8C4C2" d="M128.545 177.871C127.575 190.059 126.88 197.141 124.416 204.106C124.416 204.106 126.033 215.709 127.169 228H131.188C132.147 219.345 133.61 210.753 135.572 202.268C130.369 199.708 128.745 188.566 128.545 177.871Z"/><path fill="#12924F" d="M135.565 202.275C130.307 199.846 128.786 188.469 128.552 177.871C129.852 160.388 130.231 142.849 129.688 125.326C129.412 116.132 129.818 40.1676 127.423 29.0461C129.062 32.8129 130.949 36.4662 133.074 39.9818C138.676 48.7358 160.643 61.1097 171.173 107.591C179.376 155.532 154.126 189.44 135.565 202.275Z"/></svg>`,
  mongo: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10AA50" d="M171.173 107.591C160.636 61.1097 138.676 48.7357 133.074 39.9886C130.764 36.1353 128.717 32.1299 126.949 28C126.653 32.1292 126.109 34.7307 122.599 37.862C115.552 44.1454 85.6217 68.5354 83.1028 121.348C80.756 170.59 119.303 200.953 124.395 204.092C128.311 206.019 133.08 204.133 135.407 202.364C153.988 189.612 179.376 155.614 171.193 107.591"/><path fill="#B8C4C2" d="M128.545 177.871C127.575 190.059 126.88 197.141 124.416 204.106C124.416 204.106 126.033 215.709 127.169 228H131.188C132.147 219.345 133.61 210.753 135.572 202.268C130.369 199.708 128.745 188.566 128.545 177.871Z"/><path fill="#12924F" d="M135.565 202.275C130.307 199.846 128.786 188.469 128.552 177.871C129.852 160.388 130.231 142.849 129.688 125.326C129.412 116.132 129.818 40.1676 127.423 29.0461C129.062 32.8129 130.949 36.4662 133.074 39.9818C138.676 48.7358 160.643 61.1097 171.173 107.591C179.376 155.532 154.126 189.44 135.565 202.275Z"/></svg>`,
  firebase: `<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#FFA000" d="M55 189.366L79.7455 31.8775C80.4297 27.5596 86.2455 26.5369 88.2981 30.4003L113.842 77.8969L123.991 58.5801C124.776 57.0744 126.337 56.1294 128.039 56.1294C129.742 56.1294 131.303 57.0744 132.087 58.5801L200.964 189.366H55Z"/><path fill="#F57C00" d="M140.298 128.007L113.728 77.8969L55 189.366L140.298 128.007Z"/><path fill="#FFCA28" d="M200.965 189.366L182.035 72.6702C181.752 70.9859 180.551 69.599 178.92 69.0734C177.289 68.5477 175.501 68.9706 174.281 70.1704L55.0005 189.366L121.027 226.296C125.182 228.568 130.214 228.568 134.369 226.296L200.965 189.366Z"/></svg>`
};
SKILL_ICONS.node = SKILL_ICONS.nodejs;

// Fallback project data matching projects.json
const DEFAULT_PROJECTS = [
  {
    id: "chess-engine",
    title: "CheckmateAI",
    description: "Bitboard chess engine with alpha-beta search and positional evaluation.",
    icons: ["cpp", "py"],
    color: "#FFEB3B",
    category: "systems",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "power-grid-sim",
    title: "PulseGrid",
    description: "Power system network simulator solving Newton-Raphson load-flow equations.",
    icons: ["py", "cpp"],
    color: "#4ECDC4",
    category: "systems",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "droid-flow",
    title: "DroidFlow",
    description: "Native Android utility with reactive coroutines and offline Room database.",
    icons: ["kotlin", "androidstudio", "java"],
    color: "#A8E6CF",
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "hyper-store",
    title: "NeoMarket",
    description: "Full-stack commerce engine with reactive state and checkout API.",
    icons: ["nodejs", "js", "html", "css"],
    color: "#FF6B6B",
    category: "web",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "pulse-chat",
    title: "PulseChat",
    description: "Low-latency chat suite with WebSocket channels and code syntax highlighting.",
    icons: ["nodejs", "js"],
    color: "#A78BFA",
    category: "web",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "algo-matrix",
    title: "AlgoMatrix",
    description: "Interactive visual debugger for graph search heuristics and sorting algorithms.",
    icons: ["js", "cpp", "html"],
    color: "#FFB347",
    category: "systems",
    liveUrl: "#",
    githubUrl: "#"
  }
];

// Active state
let allProjects = [...DEFAULT_PROJECTS];
let currentFilter = 'all';

// Mapping human-friendly labels for titles/tooltips
const TECH_NAMES = {
  cpp: "C++",
  "c++": "C++",
  py: "Python",
  python: "Python",
  java: "Java",
  kotlin: "Kotlin",
  androidstudio: "Android Studio",
  html: "HTML5",
  css: "CSS3",
  js: "JavaScript",
  javascript: "JavaScript",
  nodejs: "Node.js",
  node: "Node.js",
  cloudflare: "Cloudflare",
  mongodb: "MongoDB",
  mongo: "MongoDB",
  firebase: "Firebase"
};

// Render single technology SVG icon
function renderTechIcon(rawSlug) {
  if (!rawSlug) return '';
  const slug = String(rawSlug).toLowerCase().trim().replace(/\s+/g, '');
  const techName = TECH_NAMES[slug] || rawSlug;

  if (SKILL_ICONS[slug]) {
    return `<span class="project-tech-icon-item" title="${techName}">${SKILL_ICONS[slug]}</span>`;
  }

  // Dynamic SkillIcons fallback for any additional icon
  return `
    <span class="project-tech-icon-item" title="${techName}">
      <img src="https://skillicons.dev/icons?i=${encodeURIComponent(slug)}" alt="${techName}" loading="lazy" />
    </span>
  `;
}

// Render project cards
function renderProjects(projectsToRender) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  if (!projectsToRender || projectsToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; background: var(--bg); border: var(--border-w) solid var(--border-color); text-align: center; box-shadow: 4px 4px 0 var(--shadow-color);">
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 8px;">No projects found</h3>
        <p style="color: var(--text-muted);">Try selecting another filter or check projects.json.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projectsToRender.map((project, index) => {
    const accentColor = project.color || 'var(--yellow)';
    const iconsList = project.icons || project.tags || [];
    const iconsHtml = iconsList.map(renderTechIcon).join('');

    return `
      <article class="project-card reveal visible" id="${project.id || 'project-' + index}" data-category="${project.category || 'systems'}" style="border-top: 4px solid ${accentColor};">
        <div class="project-card-top">
          <h3 class="project-title">${project.title || 'Untitled Project'}</h3>
          <span class="project-accent-indicator" style="background-color: ${accentColor};" title="${project.category || 'Engineering'}"></span>
        </div>
        <div class="project-tech-icons">
          ${iconsHtml}
        </div>
        <p class="project-desc">${project.description || ''}</p>
        <div class="project-links">
          <a href="${project.liveUrl || '#'}" class="project-link project-link--primary cursor-pointer" aria-label="View demo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Demo
          </a>
          <a href="${project.githubUrl || '#'}" class="project-link project-link--secondary cursor-pointer" aria-label="View source code">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
            Code
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// Filter projects
function filterProjects(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  const cards = document.querySelectorAll('#projectsGrid .project-card');
  let visibleCount = 0;

  if (cards.length > 0) {
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
        card.classList.add('visible');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Handle empty state gracefully
  const container = document.getElementById('projectsGrid');
  let emptyState = document.getElementById('projectsEmptyState');
  if (visibleCount === 0 && category !== 'all' && container) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.id = 'projectsEmptyState';
      emptyState.style.cssText = 'grid-column: 1 / -1; padding: 48px; background: var(--bg); border: var(--border-w) solid var(--border-color); text-align: center; box-shadow: 4px 4px 0 var(--shadow-color);';
      emptyState.innerHTML = `
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 8px;">No projects found</h3>
        <p style="color: var(--text-muted);">Try selecting another filter.</p>
      `;
      container.appendChild(emptyState);
    } else {
      emptyState.style.display = 'block';
    }
  } else if (emptyState) {
    emptyState.style.display = 'none';
  }
}

// Fetch or initialize projects
async function initProjects() {
  const existingCards = document.querySelectorAll('#projectsGrid .project-card');
  if (existingCards.length === 0) {
    renderProjects(allProjects);
  }

  // If served via HTTP/HTTPS, attempt live reload from projects.json
  if (window.location.protocol.startsWith('http')) {
    try {
      const res = await fetch('./projects.json?_t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          allProjects = data;
          renderProjects(allProjects);
          if (currentFilter !== 'all') {
            filterProjects(currentFilter);
          }
        }
      }
    } catch (err) {
      console.info('Projects loaded from embedded data.');
    }
  }
}

// =============================================
// LIVE CHESS.COM STATS INTEGRATION
// Endpoint: https://api.chess.com/pub/player/yodha_raja/stats
// Live Rapid, Blitz, Bullet ratings with count-up animation,
// progress bars, peak best records, caching & auto-sync
// =============================================
const CHESS_API_URL = 'https://api.chess.com/pub/player/yodha_raja/stats';
const CHESS_CACHE_KEY = 'yodha_chess_stats_cache_v2';
const CHESS_CACHE_TTL = 3 * 60 * 1000; // 3 minutes cache freshness

// Real default stats fallback (verified latest)
const CHESS_DEFAULTS = {
  rapid: { rating: 1850, best: 1950 },
  blitz: { rating: 1650, best: 1650 },
  bullet: { rating: 1350, best: 1400 }
};

function animateNumber(element, start, end, duration = 800) {
  if (!element) return;
  if (start === end || isNaN(start) || isNaN(end)) {
    element.textContent = end;
    return;
  }
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round(start + (end - start) * easeProgress);
    element.textContent = currentVal;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end;
      element.classList.add('updated');
      setTimeout(() => element.classList.remove('updated'), 600);
    }
  }
  requestAnimationFrame(update);
}

function renderChessStats(stats, animated = false) {
  if (!stats) return;

  const formats = [
    { key: 'rapid', scaleMax: 2000, valId: 'chessRapidRating', barId: 'chessRapidBar', bestId: 'chessRapidBest' },
    { key: 'blitz', scaleMax: 2000, valId: 'chessBlitzRating', barId: 'chessBlitzBar', bestId: 'chessBlitzBest' },
    { key: 'bullet', scaleMax: 2000, valId: 'chessBulletRating', barId: 'chessBulletBar', bestId: 'chessBulletBest' }
  ];

  formats.forEach(({ key, scaleMax, valId, barId, bestId }) => {
    const data = stats[key];
    if (!data) return;

    const valEl = document.getElementById(valId);
    const barEl = document.getElementById(barId);
    const bestEl = document.getElementById(bestId);

    const targetRating = Number(data.rating) || 0;
    const currentRating = valEl ? parseInt(valEl.textContent, 10) || 0 : 0;

    if (valEl) {
      if (animated && currentRating > 0 && currentRating !== targetRating) {
        animateNumber(valEl, currentRating, targetRating, 750);
      } else {
        valEl.textContent = targetRating;
      }
    }

    if (barEl && targetRating > 0) {
      const pct = Math.min(100, Math.max(15, Math.round((targetRating / scaleMax) * 100)));
      barEl.style.width = `${pct}%`;
    }

    if (bestEl && data.best) {
      const valSpan = bestEl.querySelector('.chess-peak-val');
      if (valSpan) {
        valSpan.textContent = data.best;
      } else {
        bestEl.textContent = `Peak ${data.best}`;
      }
    }

    // Set tooltip on card
    if (valEl) {
      const card = valEl.closest('.chess-rating-card');
      if (card) {
        card.setAttribute('title', `${key.toUpperCase()}: ${targetRating} (Peak: ${data.best || targetRating})`);
      }
    }
  });
}

function parseChessStats(json) {
  const parseCat = (cat, fallback) => {
    if (!cat) return fallback;
    const lastRating = cat.last && typeof cat.last.rating === 'number' ? cat.last.rating : fallback.rating;
    const bestRating = cat.best && typeof cat.best.rating === 'number' ? cat.best.rating : (lastRating || fallback.best);
    return { rating: lastRating, best: bestRating };
  };

  return {
    rapid: parseCat(json.chess_rapid, CHESS_DEFAULTS.rapid),
    blitz: parseCat(json.chess_blitz, CHESS_DEFAULTS.blitz),
    bullet: parseCat(json.chess_bullet, CHESS_DEFAULTS.bullet)
  };
}

async function fetchChessLiveStats() {
  // Check cache first
  try {
    const cached = localStorage.getItem(CHESS_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.timestamp && Date.now() - parsed.timestamp < CHESS_CACHE_TTL && parsed.stats) {
        renderChessStats(parsed.stats, false);
        // If fresh enough (< 1 minute), return early
        if (Date.now() - parsed.timestamp < 60000) {
          return;
        }
      }
    }
  } catch (e) {
    console.info('Chess cache check skipped');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6500);

    const response = await fetch(CHESS_API_URL, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Chess API HTTP ${response.status}`);
    }

    const data = await response.json();
    const parsedStats = parseChessStats(data);

    try {
      localStorage.setItem(CHESS_CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        stats: parsedStats
      }));
    } catch (e) { }

    renderChessStats(parsedStats, true);
  } catch (err) {
    console.warn('Could not fetch live Chess.com ratings, using fallback:', err);
    try {
      const cached = localStorage.getItem(CHESS_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.stats) {
          renderChessStats(parsed.stats, false);
          return;
        }
      }
    } catch (e) { }
    renderChessStats(CHESS_DEFAULTS, false);
  }
}

function initChessLiveStats() {
  fetchChessLiveStats();
}

// ===== APPLICATION INITIALIZER =====
function initializeApp() {
  // Initialize dynamic JSON projects
  initProjects();

  // Initialize live Chess.com stats
  initChessLiveStats();

  // Filter button handlers
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterProjects(cat);
    });
  });

  // ===== Mobile Navigation Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
          navToggle.classList.remove('active');
          navLinks.classList.remove('open');
        }
      }
    });
  }

  // ===== Navbar Scroll State =====
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ===== Scroll Reveal Animation =====
  const revealElements = document.querySelectorAll(
    '.about-bio-box, .gate-box, .chess-box, .about-quote-card, .skill-card, .skill-card-clean, .contact-connect-box, .section-header'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ===== Back to Top Button Handler =====
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== Smooth Scroll for Anchor Links (and prevent jump on #) =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') {
        e.preventDefault();
        return;
      }
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll('section[id]');
  const activateNavLink = () => {
    const scrollPos = window.scrollY;

    // If near the very top of the page, highlight Home
    if (scrollPos < 120) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#hero');
      });
      return;
    }

    // If scrolled to the bottom of the page, highlight Contact
    if ((window.innerHeight + scrollPos) >= (document.documentElement.scrollHeight - 60)) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#contact');
      });
      return;
    }

    const checkPoint = scrollPos + 220;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (checkPoint >= top && checkPoint < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', activateNavLink, { passive: true });
  activateNavLink();
}

// Run immediately if DOM is ready, or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
