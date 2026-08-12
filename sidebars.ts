import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  manualSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Manual de Usuario',
      collapsed: false,
      items: [
        'manual/flujo-general',
        'manual/administrador',
        'manual/operativo',
        'manual/jefe-area',
        'manual/gestor-compras',
        'manual/integrador-dynamics',
        'manual/estados',
        'manual/preguntas-frecuentes'
      ]
    }
  ]
};

export default sidebars;
