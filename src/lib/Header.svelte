<script lang="ts">
  interface Props {
    name: string;
    title: string;
    links?: string[];
    contacts?: string[];
  }

  let { name, title, links = [], contacts = [] }: Props = $props();
  /**
   * Check if string is formatted like a number
   * @param {string} str - the string to check
   * @returns boolean
   */
  function isPhoneNumber(str: string) {
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
  function isEmail(str: string) {
    if (str.includes('@') && str.includes('.')) {
      return true;
    }
    return false;
  }

  function setContactHref(str: string) {
    if (isPhoneNumber(str)) {
      return 'tel+' + str;
    }
    if (isEmail(str)) {
      return 'mailto:' + str;
    }
    return str;
  }
</script>

<header class="header flex flex-col md:flex-row md:justify-between md:align-baseline md:items-end">
  <div class="content-start">
    <h1 class="font-bold text-header leading-none">{name}</h1>
    <p class="title opacity-90">{title}</p>
  </div>
  <div class="content-end">
    <p class="links flex gap-1">
      {#each links as link}
        <a class="link hover:underline" href="https://{link}">{link}</a>
      {/each}
    </p>
    <p class="contacts flex gap-1 md:justify-end">
      {#each contacts as contact}
        <a class="contact hover:underline" href={setContactHref(contact)}>{contact}</a>
      {/each}
    </p>
  </div>
</header>

<style lang="postcss">
  .links,
  .contacts {
    & a:not(:last-child)::after {
      display: inline-block;
      margin-inline-start: theme(margin.1);
      content: '/';
      text-decoration: none !important;
    }
  }
</style>
