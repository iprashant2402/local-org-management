class CustomHeader extends HTMLElement{
    constructor(){
        super();
        let div_right;
        const shadow = this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'headerWrapper');

        const brandLogo = document.createElement('div');
        brandLogo.setAttribute('class', 'logoWrapper col-md-4');

        const logoText = document.createElement('h3');
        logoText.setAttribute('class', 'logo-text');
        logoText.textContent = "DASHBOARD";

        brandLogo.appendChild(logoText);

        if(this.hasAttribute('isLoggedIn')){
            const orgs = JSON.parse(localStorage.getItem('orgs'));
            div_right = document.createElement('div');
            div_right.setAttribute('class','header-right col-md-4');
            const dropselectWrapper = document.createElement('div');
            dropselectWrapper.setAttribute('class', 'selectWrapper');
            const dropselect = document.createElement('select');
            dropselect.setAttribute('id','header-select');
            dropselect.setAttribute('onchange','refreshUserList();');
            orgs.forEach(item => {
                let option = document.createElement('option');
                option.setAttribute('value', item.name);
                option.textContent = item.name;
                dropselect.appendChild(option);
            });
            dropselectWrapper.appendChild(dropselect);
            const btnWrapper = document.createElement('div');
            btnWrapper.setAttribute('class', 'btnWrapper');
            const btn = document.createElement('button');
            btn.setAttribute('onclick', 'signout();');
            btn.setAttribute('id', "logout_btn");
            btn.textContent = "Logout";
            btnWrapper.appendChild(btn);
            div_right.appendChild(dropselectWrapper);
            div_right.appendChild(btnWrapper);
        }

        const style = document.createElement('style');
        style.textContent = `
        .headerWrapper{
            width: 100vw;
            background-color: #fff;
            padding: 5px;
            padding-right: 22px;
            z-index: 1;
            position: fixed;
            top: 0;
            left: 0;
            border-bottom: 1px solid rgba(0,0,0,0.62);
            display: flex;
            felx-direction: row;
        }

        .logoWrapper{
            flex: 2;
        }

        .header-right{
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            display: flex;
        }

        .selectWrapper{
            flex: 1
        }

        .btnWrapper{
            flex: 1
        }

        #logout_btn{
            background-color: red;
            color: white;
            border: none;
            height: 30px;
            padding: 5px;
        }

        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(brandLogo);
        if(this.hasAttribute('isLoggedIn'))
        {wrapper.appendChild(div_right);}
    }
} 

