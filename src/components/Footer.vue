<template>
  <div>
    <div v-html="$t('footer.legal')" class="legal">
    </div>
    <div class="logo">
      <p>
        <span style="font-size: 2em; font-weight: 400">LUG</span>
        <span style="font-size: 2em; font-weight: 100">@ JLU</span>
      </p>
      <p>Made with &lt;3</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterPanel"
};
</script>

<style scoped src="@/styles/footer.css"/>
