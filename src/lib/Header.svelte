<script>
  export let name;
  export let title;
  export let links = [];
  export let contacts = [];

  /**
   * Check if string is formatted like a number
   * @param {string} str - the string to check
   * @returns boolean
   */
  function isPhoneNumber(str) {
    let sanitizedStr = str.replaceAll('-', '').replaceAll('+', '').replaceAll(' ', '');
    if (parseInt(sanitizedStr)) {
      return true;
    }
    return false;
  }

  /**
   * Check if string is formatted like an email
   * @param {string} str - the string to check
   * @returns boolean
   */
  function isEmail(str) {
    if (str.includes('@') && str.includes('.')) {
      return true
    }
    return false;
  }

  function setContactHref(str) {
    if (isPhoneNumber(str)) {
      return 'tel+' + str;
    }
    if (isEmail(str)) {
      return 'mailto:' + str;
    }
    return str;
   }

</script>

<header class="header">
  <div class="content-start">
    <h1 class="name">{name}</h1>
    <p class="title">{title}</p>
  </div>
  <div class="content-end">
    <p class="links">
      {#each links as link }
        <a class="link" href="https://{link}">{link}</a>
      {/each}
    </p>
    <p class="contacts">
      {#each contacts as contact }
        <a class="contact" href={setContactHref(contact )}>{contact}</a>
      {/each}
    </p>
  </div>
</header>

<style lang="scss">
.header {
  display: flex;
  align-items:last baseline;
  justify-content: space-between;

  .name {
    font-size: 26pt;
    line-height: calc(26pt / 1.2);
  }

  h1,p {
    margin: auto;
  }

  .links, .contacts {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  
}
</style>