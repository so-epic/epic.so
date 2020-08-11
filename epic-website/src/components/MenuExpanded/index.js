import React from 'react';

import MenuList from '../MenuList'


const MenuExpanded = () => {
  return (
    <div class="absolute">
      <svg xmlns="http://www.w3.org/2000/svg" width="449" height="546"><defs><clipPath id="a">
        <path fill="#fff" d="M0 0h449v546H0z"/></clipPath></defs><g data-name="Mask" clip-path="url(#a)"><g fill="#011865"><path d="M59.208 517.528c-7.7 0-15.387-1.032-22.847-3.067-7.25-1.978-14.475-4.956-21.475-8.85-6.805-3.785-13.572-8.534-20.112-14.114-6.355-5.422-12.657-11.765-18.73-18.854-11.643-13.588-22.818-30.328-33.215-49.755-9.802-18.317-19.025-39.224-27.412-62.141-7.931-21.673-15.16-45.26-21.486-70.103-6.029-23.676-11.23-48.452-15.46-73.642-4.083-24.322-7.225-48.802-9.34-72.763-2.077-23.558-3.131-46.256-3.131-67.464 0-22.044 1.962-44.073 5.832-65.477 3.77-20.858 9.398-41.374 16.724-60.98 7.193-19.246 16.096-37.81 26.46-55.174 10.266-17.198 22.054-33.369 35.038-48.064 12.983-14.694 27.267-28.033 42.457-39.648 15.333-11.724 31.724-21.794 48.718-29.929 17.305-8.284 35.413-14.646 53.823-18.91A256.456 256.456 0 01152.835-248c17.189 0 32.477.77 45.44 2.287 11.876 1.39 22.072 3.439 30.304 6.09 13.974 4.5 22.606 10.79 25.657 18.697 1.468 3.801 1.648 8.025.537 12.554-.903 3.678-2.652 7.565-5.2 11.554-4.367 6.836-9.6 11.617-9.653 11.664l-1.036.94 1.224.676c.137.076 13.88 7.684 34.404 20.524a1069.88 1069.88 0 0135.66 23.31c14.51 9.906 28.451 19.972 41.436 29.92 33.035 25.306 60.152 49.997 80.598 73.386 12.121 13.867 21.999 27.42 29.357 40.285 3.949 6.902 7.248 13.74 9.807 20.326 2.67 6.873 4.608 13.66 5.759 20.172 4.678 26.473 4.366 58.672-.903 93.115-5.303 34.665-15.41 70.117-29.226 102.524-7.207 16.905-15.376 32.867-24.279 47.443-9.319 15.258-19.478 29.048-30.194 40.988-11.284 12.572-23.296 23.21-35.7 31.615-6.448 4.37-13.104 8.202-19.785 11.39-6.868 3.278-13.936 5.959-21.01 7.969-13.218 3.756-24.907 7.97-35.733 12.883-9.688 4.397-18.482 9.267-26.883 14.89-7.023 4.7-13.913 10.04-21.065 16.327-6.385 5.613-12.44 11.494-18.294 17.182-13.308 12.927-27.068 26.294-46.815 38.86-10.657 6.782-22.076 12.733-34.91 18.193-6.974 2.968-14.46 5.818-22.25 8.47-8.193 2.789-17 5.454-26.179 7.923-8.314 2.237-16.623 3.371-24.695 3.371z"/><path d="M152.835-247a255.46 255.46 0 00-57.557 6.567c-18.34 4.247-36.378 10.585-53.618 18.838C24.73-213.49 8.397-203.456-6.88-191.774c-15.14 11.576-29.376 24.87-42.315 39.516-12.944 14.65-24.695 30.77-34.929 47.914-10.334 17.313-19.21 35.822-26.382 55.013-7.306 19.549-12.917 40.008-16.677 60.807-3.86 21.345-5.816 43.315-5.816 65.3 0 21.178 1.052 43.846 3.128 67.375 2.111 23.935 5.25 48.39 9.33 72.686 4.224 25.162 9.42 49.911 15.442 73.56 6.318 24.812 13.537 48.365 21.456 70.006 8.37 22.873 17.574 43.737 27.355 62.013 10.363 19.364 21.497 36.044 33.092 49.576 6.04 7.05 12.304 13.356 18.62 18.744 6.49 5.537 13.202 10.248 19.949 14.001 6.93 3.855 14.08 6.802 21.252 8.759a85.822 85.822 0 0022.584 3.032c7.984 0 16.205-1.122 24.436-3.336 9.157-2.464 17.944-5.123 26.115-7.905 7.767-2.644 15.23-5.485 22.182-8.443 12.782-5.439 24.154-11.365 34.764-18.117 19.66-12.51 33.384-25.842 46.655-38.733 5.864-5.697 11.927-11.587 18.33-17.216 7.186-6.316 14.11-11.683 21.17-16.408 8.447-5.653 17.287-10.55 27.025-14.968 10.873-4.934 22.607-9.165 35.874-12.935 7.02-1.995 14.035-4.656 20.852-7.91 6.636-3.166 13.249-6.973 19.655-11.314 12.337-8.361 24.287-18.944 35.516-31.456 10.676-11.894 20.799-25.636 30.086-40.841 8.878-14.535 17.024-30.454 24.212-47.314 13.784-32.331 23.867-67.7 29.157-102.283 5.253-34.337 5.566-66.423.907-92.79-1.14-6.448-3.059-13.17-5.705-19.981-2.54-6.539-5.818-13.332-9.74-20.19-7.326-12.806-17.163-26.304-29.239-40.12-20.398-23.337-47.463-47.98-80.44-73.244-12.97-9.936-26.895-19.991-41.39-29.888a1068.704 1068.704 0 00-35.627-23.289c-20.508-12.83-34.242-20.434-34.378-20.51l-2.45-1.352 2.073-1.88c.051-.046 5.187-4.736 9.483-11.462 2.488-3.895 4.194-7.682 5.07-11.254 1.062-4.326.895-8.348-.497-11.955-2.938-7.61-11.36-13.702-25.031-18.105-8.17-2.631-18.303-4.667-30.114-6.05-12.925-1.512-28.174-2.279-45.324-2.279m0-2c158.967 0 87.757 64.587 87.757 64.587S459.032-63.769 478.113 44.211c19.082 107.98-45.66 303.175-161.807 336.18-116.147 33.005-89.02 96.233-232.143 134.732-8.552 2.3-16.884 3.405-24.955 3.405C-67.795 518.528-135 245.945-135 76.775-135-103.145-6.132-249 152.835-249z" fill="#fff"/></g><path data-name="Middle line" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M22.5 43.653h20"/><text transform="translate(22 36)" fill="#fff" font-size="17" font-family="Raleway-Regular, Raleway" letter-spacing=".04em"><tspan x="0" y="0">MENU</tspan></text></g>
      </svg>
      <MenuList />
    </div>
  )
}

export default MenuExpanded;