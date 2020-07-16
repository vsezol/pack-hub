<template>
  <footer class="footer w-100 mt-5" variant="dark">
    <b-container class="p-3 d-flex">
      <img
        src="@/assets/img/avatar.png"
        alt="avatar"
        class="avatar rounded-circle mr-3"
        width="72"
        height="72"
        style="border: 2px solid #FFC107;"
      />
      <div class="contacts d-flex-column">
        <span class="d-flex align-items-center mb-2">
          <a target="_blank" href="https://github.com/vsezol" class="mr-2">
            <img src="@/assets/img/git_icon.svg" alt="" width="32" />
          </a>
          <p class="m-0">
            created by
            <a target="_blank" href="https://github.com/vsezol">vsezol</a>
          </p>
        </span>
        <span class="d-flex align-items-center">
          <img
            src="@/assets/img/phone_icon.svg"
            alt=""
            width="32"
            style="filter: invert();"
            class="mr-2"
          />
          <p class="m-0">
            +7 (923) 652-35-42
          </p>
        </span>
      </div>
    </b-container>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  background: #343A40
.git-icon, a, .footer
  color: white
a:hover
  color: white
</style>
