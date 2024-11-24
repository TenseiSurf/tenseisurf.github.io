<script lang="ts">
    let count = $state(0);
  
    function increment() {
      count++;
    }
  </script>
  
  <div class="container">
    <h1>Tensei_Surf</h1>
  
    <div class="card">
      <button onclick={increment}>
        Count is {count}
      </button>
    </div>
  
    <p class="info">
      Edit <code>src/routes/+page.svelte</code> to test hot module replacement.
    </p>
  </div>
  
  <style>
    .container {
      text-align: center;
      padding: 2rem 0;
    }
  
    h1 {
      color: #ff69b4;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .card {
      padding: 2rem;
      margin: 2rem 0;
      background-color: rgba(255, 105, 180, 0.1);
      border-radius: 8px;
      border: 1px solid rgba(255, 105, 180, 0.2);
    }
  
    button {
      padding: 0.8rem 1.5rem;
      background-color: #ff69b4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #ff99cc;
    }
  
    .info {
      color: rgba(255, 255, 255, 0.6);
    }
  
    code {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
    }
  </style>