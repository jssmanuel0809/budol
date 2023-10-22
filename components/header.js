class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <style>
      /* HEADER */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #F5E6CA;
            padding-left: 20px;
            padding-right: 20px;
            height: 8vh;
            z-index: 1;
        }
        .header{
            width: 100%;
            position: fixed;        
            overflow: hidden;
            top: 0;
        }
        .header-content{
            display: flex;
            justify-content: space-between;
            align-items: cent
        }
        .logo{
            font-family: 'Amarante', serif;
            color: #3D4C6C;
            text-decoration: none;
            letter-spacing: 10px;
            font-size: 40px;
            margin-right: 10px;
        }
        input[type=text]{
            width: 218px;
            border: 2px solid #3D4C6C;
            border-radius: 25px;
            background-color: #F8EFEF;
            padding: 8px 20px;
            margin: 8px 0;
        }
        .nav_links a {
            font-family: 'Amarante', serif;
            color: #3D4C6C;
            text-decoration: none;
        }
        .nav_links {
            list-style: none;
            display: flex;
            font-size: 26px;
        }
        .nav_links li {
            padding: 5px 20px;
        }
        .login{
            background-color: #CFA180;
            color: #F5E6CA;
            text-decoration: none;
            font-family: 'Amarante', serif;
            font-size: 26px;
            padding: 5px;
            padding-left: 25px;
            padding-right: 25px;
        }
      </style>

      <!-- NAVIGATION BAR -->
        <header class="header">
            <div class="header-content">
                <!-- <a class="logo"><img src="" alt="logo"></a> -->
                <a class="logo">BUDOL!</a>
                <input type="text" id="search" name="search" placeholder="SEARCH">
            </div>
            <div class="header-content">
                <nav>
                    <ul class="nav_links">
                        <li><a href="">HOME</a></li>
                        
                    </ul>
                </nav>
                <a href="" class="login">LOG IN</a>
            </div>
        </header>
        `;
  }
}

customElements.define('header-component', Header);