import { createInertiaApp } from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';
// Ne pas retirer l'import de React
import React from 'react';

// Importer le(s) fichier(s) CSS/SCSS globaux
import 'Styles/index.scss';

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
