<template>
  <header>
    <img alt="ADt Logo" src="../../assets/logo.png" height="50" />
    <p>QR Desk Menü</p>
    <nav>
      <ul>
        <li class="badge bg-info"><router-link to="/">Home</router-link></li>
        <li class="badge bg-info"><router-link to="/landing">About</router-link></li>
        <li class="badge bg-info"><router-link to="/team">Team</router-link></li>
            <li class="badge bg-info"><router-link to="/menu">Menu</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script></script>
<style>
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
}

header img {
  margin: 0 10px;
}
header p {
  font-size: 1.5em;
}
header nav {
  margin-left: auto;
}

ul {
  list-style: none;
}

ul li {
  display: inline-flex;
  margin-left: 1rem;
}
</style>
