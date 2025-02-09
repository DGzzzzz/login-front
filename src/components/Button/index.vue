<template>
    <button :style="buttonStyle">
      <slot></slot>
    </button>
</template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      color: {
        type: String,
        default: 'primary', // Cor padrão
      },
    },
    computed: {
      buttonStyle() {
        const colors = {
          primary: '#1E9E6A',
          secondary: '#1A202C',
        };
        return {
          backgroundColor: colors[this.color] || colors.primary,
          width: '400px',
          color: '#fff',
          padding: '14px 32px 14px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          gap: '12px',
          fontSize: '18px',
        };
      },
    },
  };
</script>
  