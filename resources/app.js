import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { createRoot } from 'react-dom/client';
// Ne pas retirer l'import de React
import React from 'react';

// Importer le(s) fichier(s) CSS/SCSS globaux
import 'Styles/index.scss';

InertiaProgress.init({
  delay: 0,
  color: 'purple',
  includeCSS: true,
  showSpinner: true,
});

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
