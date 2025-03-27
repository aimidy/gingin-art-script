
import axios from 'axios';

async function registerUsers() {

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user51", "password": "user51", "email": "user51@test.com", "gender": "male", "age": "41_64", "city": "南投縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user51", res.data);
    }).catch(err => {
        console.error("Error for: user51", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user52", "password": "user52", "email": "user52@test.com", "gender": "female", "age": "29_40", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user52", res.data);
    }).catch(err => {
        console.error("Error for: user52", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user53", "password": "user53", "email": "user53@test.com", "gender": "male", "age": "65plus", "city": "南投縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user53", res.data);
    }).catch(err => {
        console.error("Error for: user53", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user54", "password": "user54", "email": "user54@test.com", "gender": "female", "age": "65plus", "city": "新竹市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user54", res.data);
    }).catch(err => {
        console.error("Error for: user54", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user55", "password": "user55", "email": "user55@test.com", "gender": "female", "age": "under18", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user55", res.data);
    }).catch(err => {
        console.error("Error for: user55", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user56", "password": "user56", "email": "user56@test.com", "gender": "male", "age": "18_28", "city": "宜蘭縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user56", res.data);
    }).catch(err => {
        console.error("Error for: user56", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user57", "password": "user57", "email": "user57@test.com", "gender": "male", "age": "65plus", "city": "台北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user57", res.data);
    }).catch(err => {
        console.error("Error for: user57", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user58", "password": "user58", "email": "user58@test.com", "gender": "male", "age": "18_28", "city": "新竹縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user58", res.data);
    }).catch(err => {
        console.error("Error for: user58", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user59", "password": "user59", "email": "user59@test.com", "gender": "male", "age": "18_28", "city": "新竹縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user59", res.data);
    }).catch(err => {
        console.error("Error for: user59", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user60", "password": "user60", "email": "user60@test.com", "gender": "male", "age": "29_40", "city": "桃園市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user60", res.data);
    }).catch(err => {
        console.error("Error for: user60", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user61", "password": "user61", "email": "user61@test.com", "gender": "male", "age": "under18", "city": "雲林縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user61", res.data);
    }).catch(err => {
        console.error("Error for: user61", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user62", "password": "user62", "email": "user62@test.com", "gender": "female", "age": "under18", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user62", res.data);
    }).catch(err => {
        console.error("Error for: user62", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user63", "password": "user63", "email": "user63@test.com", "gender": "male", "age": "18_28", "city": "台東縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user63", res.data);
    }).catch(err => {
        console.error("Error for: user63", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user64", "password": "user64", "email": "user64@test.com", "gender": "female", "age": "under18", "city": "高雄市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user64", res.data);
    }).catch(err => {
        console.error("Error for: user64", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user65", "password": "user65", "email": "user65@test.com", "gender": "female", "age": "65plus", "city": "基隆市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user65", res.data);
    }).catch(err => {
        console.error("Error for: user65", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user66", "password": "user66", "email": "user66@test.com", "gender": "male", "age": "41_64", "city": "台南市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user66", res.data);
    }).catch(err => {
        console.error("Error for: user66", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user67", "password": "user67", "email": "user67@test.com", "gender": "male", "age": "41_64", "city": "宜蘭縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user67", res.data);
    }).catch(err => {
        console.error("Error for: user67", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user68", "password": "user68", "email": "user68@test.com", "gender": "female", "age": "41_64", "city": "桃園市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user68", res.data);
    }).catch(err => {
        console.error("Error for: user68", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user69", "password": "user69", "email": "user69@test.com", "gender": "male", "age": "41_64", "city": "台東縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user69", res.data);
    }).catch(err => {
        console.error("Error for: user69", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user70", "password": "user70", "email": "user70@test.com", "gender": "female", "age": "18_28", "city": "台北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user70", res.data);
    }).catch(err => {
        console.error("Error for: user70", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user71", "password": "user71", "email": "user71@test.com", "gender": "male", "age": "29_40", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user71", res.data);
    }).catch(err => {
        console.error("Error for: user71", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user72", "password": "user72", "email": "user72@test.com", "gender": "male", "age": "18_28", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user72", res.data);
    }).catch(err => {
        console.error("Error for: user72", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user73", "password": "user73", "email": "user73@test.com", "gender": "male", "age": "29_40", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user73", res.data);
    }).catch(err => {
        console.error("Error for: user73", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user74", "password": "user74", "email": "user74@test.com", "gender": "female", "age": "under18", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user74", res.data);
    }).catch(err => {
        console.error("Error for: user74", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user75", "password": "user75", "email": "user75@test.com", "gender": "male", "age": "18_28", "city": "基隆市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user75", res.data);
    }).catch(err => {
        console.error("Error for: user75", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user76", "password": "user76", "email": "user76@test.com", "gender": "female", "age": "under18", "city": "台北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user76", res.data);
    }).catch(err => {
        console.error("Error for: user76", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user77", "password": "user77", "email": "user77@test.com", "gender": "female", "age": "41_64", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user77", res.data);
    }).catch(err => {
        console.error("Error for: user77", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user78", "password": "user78", "email": "user78@test.com", "gender": "male", "age": "41_64", "city": "雲林縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user78", res.data);
    }).catch(err => {
        console.error("Error for: user78", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user79", "password": "user79", "email": "user79@test.com", "gender": "female", "age": "41_64", "city": "台南市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user79", res.data);
    }).catch(err => {
        console.error("Error for: user79", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user80", "password": "user80", "email": "user80@test.com", "gender": "male", "age": "under18", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user80", res.data);
    }).catch(err => {
        console.error("Error for: user80", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user81", "password": "user81", "email": "user81@test.com", "gender": "female", "age": "under18", "city": "澎湖縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user81", res.data);
    }).catch(err => {
        console.error("Error for: user81", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user82", "password": "user82", "email": "user82@test.com", "gender": "female", "age": "under18", "city": "屏東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user82", res.data);
    }).catch(err => {
        console.error("Error for: user82", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user83", "password": "user83", "email": "user83@test.com", "gender": "female", "age": "18_28", "city": "澎湖縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user83", res.data);
    }).catch(err => {
        console.error("Error for: user83", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user84", "password": "user84", "email": "user84@test.com", "gender": "female", "age": "29_40", "city": "嘉義縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user84", res.data);
    }).catch(err => {
        console.error("Error for: user84", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user85", "password": "user85", "email": "user85@test.com", "gender": "female", "age": "18_28", "city": "基隆市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user85", res.data);
    }).catch(err => {
        console.error("Error for: user85", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user86", "password": "user86", "email": "user86@test.com", "gender": "male", "age": "18_28", "city": "屏東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user86", res.data);
    }).catch(err => {
        console.error("Error for: user86", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user87", "password": "user87", "email": "user87@test.com", "gender": "male", "age": "under18", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user87", res.data);
    }).catch(err => {
        console.error("Error for: user87", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user88", "password": "user88", "email": "user88@test.com", "gender": "female", "age": "29_40", "city": "高雄市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user88", res.data);
    }).catch(err => {
        console.error("Error for: user88", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user89", "password": "user89", "email": "user89@test.com", "gender": "female", "age": "65plus", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user89", res.data);
    }).catch(err => {
        console.error("Error for: user89", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user90", "password": "user90", "email": "user90@test.com", "gender": "male", "age": "18_28", "city": "基隆市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user90", res.data);
    }).catch(err => {
        console.error("Error for: user90", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user91", "password": "user91", "email": "user91@test.com", "gender": "female", "age": "18_28", "city": "高雄市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user91", res.data);
    }).catch(err => {
        console.error("Error for: user91", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user92", "password": "user92", "email": "user92@test.com", "gender": "female", "age": "18_28", "city": "桃園市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user92", res.data);
    }).catch(err => {
        console.error("Error for: user92", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user93", "password": "user93", "email": "user93@test.com", "gender": "male", "age": "41_64", "city": "嘉義縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user93", res.data);
    }).catch(err => {
        console.error("Error for: user93", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user94", "password": "user94", "email": "user94@test.com", "gender": "male", "age": "29_40", "city": "彰化縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user94", res.data);
    }).catch(err => {
        console.error("Error for: user94", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user95", "password": "user95", "email": "user95@test.com", "gender": "male", "age": "65plus", "city": "嘉義縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user95", res.data);
    }).catch(err => {
        console.error("Error for: user95", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user96", "password": "user96", "email": "user96@test.com", "gender": "male", "age": "under18", "city": "桃園市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user96", res.data);
    }).catch(err => {
        console.error("Error for: user96", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user97", "password": "user97", "email": "user97@test.com", "gender": "male", "age": "41_64", "city": "南投縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user97", res.data);
    }).catch(err => {
        console.error("Error for: user97", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user98", "password": "user98", "email": "user98@test.com", "gender": "male", "age": "41_64", "city": "嘉義市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user98", res.data);
    }).catch(err => {
        console.error("Error for: user98", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user99", "password": "user99", "email": "user99@test.com", "gender": "female", "age": "41_64", "city": "彰化縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user99", res.data);
    }).catch(err => {
        console.error("Error for: user99", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user100", "password": "user100", "email": "user100@test.com", "gender": "female", "age": "under18", "city": "新竹縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user100", res.data);
    }).catch(err => {
        console.error("Error for: user100", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user101", "password": "user101", "email": "user101@test.com", "gender": "female", "age": "65plus", "city": "台南市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user101", res.data);
    }).catch(err => {
        console.error("Error for: user101", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user102", "password": "user102", "email": "user102@test.com", "gender": "male", "age": "29_40", "city": "新竹縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user102", res.data);
    }).catch(err => {
        console.error("Error for: user102", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user103", "password": "user103", "email": "user103@test.com", "gender": "male", "age": "under18", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user103", res.data);
    }).catch(err => {
        console.error("Error for: user103", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user104", "password": "user104", "email": "user104@test.com", "gender": "male", "age": "29_40", "city": "新竹縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user104", res.data);
    }).catch(err => {
        console.error("Error for: user104", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user105", "password": "user105", "email": "user105@test.com", "gender": "male", "age": "41_64", "city": "新竹市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user105", res.data);
    }).catch(err => {
        console.error("Error for: user105", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user106", "password": "user106", "email": "user106@test.com", "gender": "male", "age": "65plus", "city": "金門縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user106", res.data);
    }).catch(err => {
        console.error("Error for: user106", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user107", "password": "user107", "email": "user107@test.com", "gender": "male", "age": "65plus", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user107", res.data);
    }).catch(err => {
        console.error("Error for: user107", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user108", "password": "user108", "email": "user108@test.com", "gender": "female", "age": "41_64", "city": "屏東縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user108", res.data);
    }).catch(err => {
        console.error("Error for: user108", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user109", "password": "user109", "email": "user109@test.com", "gender": "male", "age": "29_40", "city": "屏東縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user109", res.data);
    }).catch(err => {
        console.error("Error for: user109", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user110", "password": "user110", "email": "user110@test.com", "gender": "male", "age": "29_40", "city": "屏東縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user110", res.data);
    }).catch(err => {
        console.error("Error for: user110", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user111", "password": "user111", "email": "user111@test.com", "gender": "male", "age": "under18", "city": "高雄市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user111", res.data);
    }).catch(err => {
        console.error("Error for: user111", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user112", "password": "user112", "email": "user112@test.com", "gender": "female", "age": "65plus", "city": "嘉義市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user112", res.data);
    }).catch(err => {
        console.error("Error for: user112", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user113", "password": "user113", "email": "user113@test.com", "gender": "female", "age": "under18", "city": "屏東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user113", res.data);
    }).catch(err => {
        console.error("Error for: user113", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user114", "password": "user114", "email": "user114@test.com", "gender": "female", "age": "29_40", "city": "桃園市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user114", res.data);
    }).catch(err => {
        console.error("Error for: user114", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user115", "password": "user115", "email": "user115@test.com", "gender": "female", "age": "29_40", "city": "嘉義市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user115", res.data);
    }).catch(err => {
        console.error("Error for: user115", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user116", "password": "user116", "email": "user116@test.com", "gender": "female", "age": "65plus", "city": "台中市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user116", res.data);
    }).catch(err => {
        console.error("Error for: user116", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user117", "password": "user117", "email": "user117@test.com", "gender": "female", "age": "under18", "city": "桃園市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user117", res.data);
    }).catch(err => {
        console.error("Error for: user117", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user118", "password": "user118", "email": "user118@test.com", "gender": "male", "age": "29_40", "city": "高雄市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user118", res.data);
    }).catch(err => {
        console.error("Error for: user118", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user119", "password": "user119", "email": "user119@test.com", "gender": "male", "age": "29_40", "city": "新竹縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user119", res.data);
    }).catch(err => {
        console.error("Error for: user119", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user120", "password": "user120", "email": "user120@test.com", "gender": "female", "age": "41_64", "city": "宜蘭縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user120", res.data);
    }).catch(err => {
        console.error("Error for: user120", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user121", "password": "user121", "email": "user121@test.com", "gender": "female", "age": "29_40", "city": "台中市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user121", res.data);
    }).catch(err => {
        console.error("Error for: user121", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user122", "password": "user122", "email": "user122@test.com", "gender": "male", "age": "18_28", "city": "宜蘭縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user122", res.data);
    }).catch(err => {
        console.error("Error for: user122", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user123", "password": "user123", "email": "user123@test.com", "gender": "male", "age": "65plus", "city": "嘉義市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user123", res.data);
    }).catch(err => {
        console.error("Error for: user123", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user124", "password": "user124", "email": "user124@test.com", "gender": "female", "age": "29_40", "city": "台中市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user124", res.data);
    }).catch(err => {
        console.error("Error for: user124", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user125", "password": "user125", "email": "user125@test.com", "gender": "male", "age": "under18", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user125", res.data);
    }).catch(err => {
        console.error("Error for: user125", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user126", "password": "user126", "email": "user126@test.com", "gender": "male", "age": "65plus", "city": "台北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user126", res.data);
    }).catch(err => {
        console.error("Error for: user126", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user127", "password": "user127", "email": "user127@test.com", "gender": "male", "age": "18_28", "city": "澎湖縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user127", res.data);
    }).catch(err => {
        console.error("Error for: user127", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user128", "password": "user128", "email": "user128@test.com", "gender": "female", "age": "41_64", "city": "桃園市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user128", res.data);
    }).catch(err => {
        console.error("Error for: user128", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user129", "password": "user129", "email": "user129@test.com", "gender": "male", "age": "29_40", "city": "嘉義縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user129", res.data);
    }).catch(err => {
        console.error("Error for: user129", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user130", "password": "user130", "email": "user130@test.com", "gender": "male", "age": "29_40", "city": "基隆市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user130", res.data);
    }).catch(err => {
        console.error("Error for: user130", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user131", "password": "user131", "email": "user131@test.com", "gender": "male", "age": "under18", "city": "嘉義市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user131", res.data);
    }).catch(err => {
        console.error("Error for: user131", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user132", "password": "user132", "email": "user132@test.com", "gender": "male", "age": "29_40", "city": "台南市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user132", res.data);
    }).catch(err => {
        console.error("Error for: user132", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user133", "password": "user133", "email": "user133@test.com", "gender": "female", "age": "41_64", "city": "花蓮縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user133", res.data);
    }).catch(err => {
        console.error("Error for: user133", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user134", "password": "user134", "email": "user134@test.com", "gender": "female", "age": "41_64", "city": "苗栗縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user134", res.data);
    }).catch(err => {
        console.error("Error for: user134", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user135", "password": "user135", "email": "user135@test.com", "gender": "male", "age": "18_28", "city": "台東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user135", res.data);
    }).catch(err => {
        console.error("Error for: user135", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user136", "password": "user136", "email": "user136@test.com", "gender": "female", "age": "65plus", "city": "金門縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user136", res.data);
    }).catch(err => {
        console.error("Error for: user136", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user137", "password": "user137", "email": "user137@test.com", "gender": "female", "age": "29_40", "city": "台中市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user137", res.data);
    }).catch(err => {
        console.error("Error for: user137", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user138", "password": "user138", "email": "user138@test.com", "gender": "male", "age": "under18", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user138", res.data);
    }).catch(err => {
        console.error("Error for: user138", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user139", "password": "user139", "email": "user139@test.com", "gender": "female", "age": "under18", "city": "新北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user139", res.data);
    }).catch(err => {
        console.error("Error for: user139", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user140", "password": "user140", "email": "user140@test.com", "gender": "male", "age": "under18", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user140", res.data);
    }).catch(err => {
        console.error("Error for: user140", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user141", "password": "user141", "email": "user141@test.com", "gender": "female", "age": "18_28", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user141", res.data);
    }).catch(err => {
        console.error("Error for: user141", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user142", "password": "user142", "email": "user142@test.com", "gender": "male", "age": "under18", "city": "澎湖縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user142", res.data);
    }).catch(err => {
        console.error("Error for: user142", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user143", "password": "user143", "email": "user143@test.com", "gender": "male", "age": "41_64", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user143", res.data);
    }).catch(err => {
        console.error("Error for: user143", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user144", "password": "user144", "email": "user144@test.com", "gender": "male", "age": "29_40", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user144", res.data);
    }).catch(err => {
        console.error("Error for: user144", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user145", "password": "user145", "email": "user145@test.com", "gender": "male", "age": "41_64", "city": "台東縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user145", res.data);
    }).catch(err => {
        console.error("Error for: user145", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user146", "password": "user146", "email": "user146@test.com", "gender": "male", "age": "29_40", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user146", res.data);
    }).catch(err => {
        console.error("Error for: user146", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user147", "password": "user147", "email": "user147@test.com", "gender": "female", "age": "under18", "city": "南投縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user147", res.data);
    }).catch(err => {
        console.error("Error for: user147", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user148", "password": "user148", "email": "user148@test.com", "gender": "female", "age": "under18", "city": "雲林縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user148", res.data);
    }).catch(err => {
        console.error("Error for: user148", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user149", "password": "user149", "email": "user149@test.com", "gender": "male", "age": "41_64", "city": "基隆市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user149", res.data);
    }).catch(err => {
        console.error("Error for: user149", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user150", "password": "user150", "email": "user150@test.com", "gender": "male", "age": "18_28", "city": "屏東縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user150", res.data);
    }).catch(err => {
        console.error("Error for: user150", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user151", "password": "user151", "email": "user151@test.com", "gender": "female", "age": "29_40", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user151", res.data);
    }).catch(err => {
        console.error("Error for: user151", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user152", "password": "user152", "email": "user152@test.com", "gender": "female", "age": "under18", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user152", res.data);
    }).catch(err => {
        console.error("Error for: user152", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user153", "password": "user153", "email": "user153@test.com", "gender": "male", "age": "under18", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user153", res.data);
    }).catch(err => {
        console.error("Error for: user153", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user154", "password": "user154", "email": "user154@test.com", "gender": "female", "age": "41_64", "city": "澎湖縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user154", res.data);
    }).catch(err => {
        console.error("Error for: user154", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user155", "password": "user155", "email": "user155@test.com", "gender": "male", "age": "29_40", "city": "新北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user155", res.data);
    }).catch(err => {
        console.error("Error for: user155", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user156", "password": "user156", "email": "user156@test.com", "gender": "male", "age": "41_64", "city": "嘉義市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user156", res.data);
    }).catch(err => {
        console.error("Error for: user156", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user157", "password": "user157", "email": "user157@test.com", "gender": "female", "age": "65plus", "city": "雲林縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user157", res.data);
    }).catch(err => {
        console.error("Error for: user157", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user158", "password": "user158", "email": "user158@test.com", "gender": "female", "age": "18_28", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user158", res.data);
    }).catch(err => {
        console.error("Error for: user158", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user159", "password": "user159", "email": "user159@test.com", "gender": "female", "age": "18_28", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user159", res.data);
    }).catch(err => {
        console.error("Error for: user159", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user160", "password": "user160", "email": "user160@test.com", "gender": "female", "age": "18_28", "city": "雲林縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user160", res.data);
    }).catch(err => {
        console.error("Error for: user160", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user161", "password": "user161", "email": "user161@test.com", "gender": "male", "age": "29_40", "city": "澎湖縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user161", res.data);
    }).catch(err => {
        console.error("Error for: user161", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user162", "password": "user162", "email": "user162@test.com", "gender": "female", "age": "29_40", "city": "連江縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user162", res.data);
    }).catch(err => {
        console.error("Error for: user162", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user163", "password": "user163", "email": "user163@test.com", "gender": "female", "age": "65plus", "city": "金門縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user163", res.data);
    }).catch(err => {
        console.error("Error for: user163", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user164", "password": "user164", "email": "user164@test.com", "gender": "male", "age": "65plus", "city": "金門縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user164", res.data);
    }).catch(err => {
        console.error("Error for: user164", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user165", "password": "user165", "email": "user165@test.com", "gender": "male", "age": "65plus", "city": "台北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user165", res.data);
    }).catch(err => {
        console.error("Error for: user165", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user166", "password": "user166", "email": "user166@test.com", "gender": "female", "age": "under18", "city": "新竹縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user166", res.data);
    }).catch(err => {
        console.error("Error for: user166", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user167", "password": "user167", "email": "user167@test.com", "gender": "male", "age": "18_28", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user167", res.data);
    }).catch(err => {
        console.error("Error for: user167", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user168", "password": "user168", "email": "user168@test.com", "gender": "male", "age": "41_64", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user168", res.data);
    }).catch(err => {
        console.error("Error for: user168", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user169", "password": "user169", "email": "user169@test.com", "gender": "female", "age": "41_64", "city": "金門縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user169", res.data);
    }).catch(err => {
        console.error("Error for: user169", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user170", "password": "user170", "email": "user170@test.com", "gender": "male", "age": "29_40", "city": "宜蘭縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user170", res.data);
    }).catch(err => {
        console.error("Error for: user170", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user171", "password": "user171", "email": "user171@test.com", "gender": "female", "age": "29_40", "city": "基隆市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user171", res.data);
    }).catch(err => {
        console.error("Error for: user171", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user172", "password": "user172", "email": "user172@test.com", "gender": "male", "age": "29_40", "city": "台北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user172", res.data);
    }).catch(err => {
        console.error("Error for: user172", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user173", "password": "user173", "email": "user173@test.com", "gender": "male", "age": "under18", "city": "宜蘭縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user173", res.data);
    }).catch(err => {
        console.error("Error for: user173", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user174", "password": "user174", "email": "user174@test.com", "gender": "female", "age": "65plus", "city": "新北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user174", res.data);
    }).catch(err => {
        console.error("Error for: user174", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user175", "password": "user175", "email": "user175@test.com", "gender": "male", "age": "under18", "city": "高雄市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user175", res.data);
    }).catch(err => {
        console.error("Error for: user175", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user176", "password": "user176", "email": "user176@test.com", "gender": "male", "age": "18_28", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user176", res.data);
    }).catch(err => {
        console.error("Error for: user176", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user177", "password": "user177", "email": "user177@test.com", "gender": "male", "age": "29_40", "city": "花蓮縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user177", res.data);
    }).catch(err => {
        console.error("Error for: user177", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user178", "password": "user178", "email": "user178@test.com", "gender": "male", "age": "29_40", "city": "新竹縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user178", res.data);
    }).catch(err => {
        console.error("Error for: user178", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user179", "password": "user179", "email": "user179@test.com", "gender": "female", "age": "18_28", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user179", res.data);
    }).catch(err => {
        console.error("Error for: user179", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user180", "password": "user180", "email": "user180@test.com", "gender": "female", "age": "18_28", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user180", res.data);
    }).catch(err => {
        console.error("Error for: user180", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user181", "password": "user181", "email": "user181@test.com", "gender": "female", "age": "29_40", "city": "桃園市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user181", res.data);
    }).catch(err => {
        console.error("Error for: user181", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user182", "password": "user182", "email": "user182@test.com", "gender": "male", "age": "under18", "city": "台北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user182", res.data);
    }).catch(err => {
        console.error("Error for: user182", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user183", "password": "user183", "email": "user183@test.com", "gender": "male", "age": "65plus", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user183", res.data);
    }).catch(err => {
        console.error("Error for: user183", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user184", "password": "user184", "email": "user184@test.com", "gender": "male", "age": "18_28", "city": "高雄市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user184", res.data);
    }).catch(err => {
        console.error("Error for: user184", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user185", "password": "user185", "email": "user185@test.com", "gender": "male", "age": "29_40", "city": "花蓮縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user185", res.data);
    }).catch(err => {
        console.error("Error for: user185", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user186", "password": "user186", "email": "user186@test.com", "gender": "male", "age": "41_64", "city": "台東縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user186", res.data);
    }).catch(err => {
        console.error("Error for: user186", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user187", "password": "user187", "email": "user187@test.com", "gender": "male", "age": "41_64", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user187", res.data);
    }).catch(err => {
        console.error("Error for: user187", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user188", "password": "user188", "email": "user188@test.com", "gender": "female", "age": "under18", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user188", res.data);
    }).catch(err => {
        console.error("Error for: user188", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user189", "password": "user189", "email": "user189@test.com", "gender": "female", "age": "41_64", "city": "苗栗縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user189", res.data);
    }).catch(err => {
        console.error("Error for: user189", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user190", "password": "user190", "email": "user190@test.com", "gender": "male", "age": "41_64", "city": "金門縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user190", res.data);
    }).catch(err => {
        console.error("Error for: user190", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user191", "password": "user191", "email": "user191@test.com", "gender": "male", "age": "29_40", "city": "金門縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user191", res.data);
    }).catch(err => {
        console.error("Error for: user191", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user192", "password": "user192", "email": "user192@test.com", "gender": "female", "age": "41_64", "city": "基隆市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user192", res.data);
    }).catch(err => {
        console.error("Error for: user192", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user193", "password": "user193", "email": "user193@test.com", "gender": "female", "age": "41_64", "city": "台北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user193", res.data);
    }).catch(err => {
        console.error("Error for: user193", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user194", "password": "user194", "email": "user194@test.com", "gender": "female", "age": "18_28", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user194", res.data);
    }).catch(err => {
        console.error("Error for: user194", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user195", "password": "user195", "email": "user195@test.com", "gender": "male", "age": "65plus", "city": "高雄市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user195", res.data);
    }).catch(err => {
        console.error("Error for: user195", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user196", "password": "user196", "email": "user196@test.com", "gender": "male", "age": "29_40", "city": "宜蘭縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user196", res.data);
    }).catch(err => {
        console.error("Error for: user196", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user197", "password": "user197", "email": "user197@test.com", "gender": "female", "age": "29_40", "city": "金門縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user197", res.data);
    }).catch(err => {
        console.error("Error for: user197", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user198", "password": "user198", "email": "user198@test.com", "gender": "female", "age": "65plus", "city": "台中市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user198", res.data);
    }).catch(err => {
        console.error("Error for: user198", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user199", "password": "user199", "email": "user199@test.com", "gender": "female", "age": "65plus", "city": "新北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user199", res.data);
    }).catch(err => {
        console.error("Error for: user199", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user200", "password": "user200", "email": "user200@test.com", "gender": "male", "age": "under18", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user200", res.data);
    }).catch(err => {
        console.error("Error for: user200", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user201", "password": "user201", "email": "user201@test.com", "gender": "female", "age": "18_28", "city": "台東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user201", res.data);
    }).catch(err => {
        console.error("Error for: user201", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user202", "password": "user202", "email": "user202@test.com", "gender": "female", "age": "18_28", "city": "台北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user202", res.data);
    }).catch(err => {
        console.error("Error for: user202", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user203", "password": "user203", "email": "user203@test.com", "gender": "male", "age": "41_64", "city": "台南市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user203", res.data);
    }).catch(err => {
        console.error("Error for: user203", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user204", "password": "user204", "email": "user204@test.com", "gender": "male", "age": "41_64", "city": "連江縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user204", res.data);
    }).catch(err => {
        console.error("Error for: user204", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user205", "password": "user205", "email": "user205@test.com", "gender": "female", "age": "29_40", "city": "澎湖縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user205", res.data);
    }).catch(err => {
        console.error("Error for: user205", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user206", "password": "user206", "email": "user206@test.com", "gender": "female", "age": "29_40", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user206", res.data);
    }).catch(err => {
        console.error("Error for: user206", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user207", "password": "user207", "email": "user207@test.com", "gender": "female", "age": "under18", "city": "台東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user207", res.data);
    }).catch(err => {
        console.error("Error for: user207", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user208", "password": "user208", "email": "user208@test.com", "gender": "male", "age": "18_28", "city": "雲林縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user208", res.data);
    }).catch(err => {
        console.error("Error for: user208", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user209", "password": "user209", "email": "user209@test.com", "gender": "male", "age": "29_40", "city": "嘉義縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user209", res.data);
    }).catch(err => {
        console.error("Error for: user209", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user210", "password": "user210", "email": "user210@test.com", "gender": "male", "age": "18_28", "city": "南投縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user210", res.data);
    }).catch(err => {
        console.error("Error for: user210", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user211", "password": "user211", "email": "user211@test.com", "gender": "male", "age": "under18", "city": "澎湖縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user211", res.data);
    }).catch(err => {
        console.error("Error for: user211", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user212", "password": "user212", "email": "user212@test.com", "gender": "female", "age": "under18", "city": "屏東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user212", res.data);
    }).catch(err => {
        console.error("Error for: user212", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user213", "password": "user213", "email": "user213@test.com", "gender": "female", "age": "65plus", "city": "嘉義縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user213", res.data);
    }).catch(err => {
        console.error("Error for: user213", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user214", "password": "user214", "email": "user214@test.com", "gender": "female", "age": "41_64", "city": "宜蘭縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user214", res.data);
    }).catch(err => {
        console.error("Error for: user214", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user215", "password": "user215", "email": "user215@test.com", "gender": "female", "age": "29_40", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user215", res.data);
    }).catch(err => {
        console.error("Error for: user215", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user216", "password": "user216", "email": "user216@test.com", "gender": "female", "age": "under18", "city": "桃園市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user216", res.data);
    }).catch(err => {
        console.error("Error for: user216", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user217", "password": "user217", "email": "user217@test.com", "gender": "male", "age": "29_40", "city": "宜蘭縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user217", res.data);
    }).catch(err => {
        console.error("Error for: user217", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user218", "password": "user218", "email": "user218@test.com", "gender": "female", "age": "under18", "city": "花蓮縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user218", res.data);
    }).catch(err => {
        console.error("Error for: user218", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user219", "password": "user219", "email": "user219@test.com", "gender": "male", "age": "18_28", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user219", res.data);
    }).catch(err => {
        console.error("Error for: user219", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user220", "password": "user220", "email": "user220@test.com", "gender": "male", "age": "65plus", "city": "苗栗縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user220", res.data);
    }).catch(err => {
        console.error("Error for: user220", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user221", "password": "user221", "email": "user221@test.com", "gender": "male", "age": "41_64", "city": "花蓮縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user221", res.data);
    }).catch(err => {
        console.error("Error for: user221", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user222", "password": "user222", "email": "user222@test.com", "gender": "female", "age": "18_28", "city": "花蓮縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user222", res.data);
    }).catch(err => {
        console.error("Error for: user222", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user223", "password": "user223", "email": "user223@test.com", "gender": "male", "age": "under18", "city": "台北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user223", res.data);
    }).catch(err => {
        console.error("Error for: user223", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user224", "password": "user224", "email": "user224@test.com", "gender": "male", "age": "29_40", "city": "金門縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user224", res.data);
    }).catch(err => {
        console.error("Error for: user224", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user225", "password": "user225", "email": "user225@test.com", "gender": "female", "age": "29_40", "city": "雲林縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user225", res.data);
    }).catch(err => {
        console.error("Error for: user225", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user226", "password": "user226", "email": "user226@test.com", "gender": "female", "age": "under18", "city": "新北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user226", res.data);
    }).catch(err => {
        console.error("Error for: user226", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user227", "password": "user227", "email": "user227@test.com", "gender": "female", "age": "under18", "city": "澎湖縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user227", res.data);
    }).catch(err => {
        console.error("Error for: user227", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user228", "password": "user228", "email": "user228@test.com", "gender": "female", "age": "41_64", "city": "高雄市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user228", res.data);
    }).catch(err => {
        console.error("Error for: user228", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user229", "password": "user229", "email": "user229@test.com", "gender": "male", "age": "18_28", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user229", res.data);
    }).catch(err => {
        console.error("Error for: user229", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user230", "password": "user230", "email": "user230@test.com", "gender": "female", "age": "under18", "city": "新竹市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user230", res.data);
    }).catch(err => {
        console.error("Error for: user230", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user231", "password": "user231", "email": "user231@test.com", "gender": "male", "age": "under18", "city": "基隆市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user231", res.data);
    }).catch(err => {
        console.error("Error for: user231", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user232", "password": "user232", "email": "user232@test.com", "gender": "male", "age": "18_28", "city": "屏東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user232", res.data);
    }).catch(err => {
        console.error("Error for: user232", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user233", "password": "user233", "email": "user233@test.com", "gender": "female", "age": "29_40", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user233", res.data);
    }).catch(err => {
        console.error("Error for: user233", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user234", "password": "user234", "email": "user234@test.com", "gender": "male", "age": "41_64", "city": "高雄市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user234", res.data);
    }).catch(err => {
        console.error("Error for: user234", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user235", "password": "user235", "email": "user235@test.com", "gender": "male", "age": "29_40", "city": "彰化縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user235", res.data);
    }).catch(err => {
        console.error("Error for: user235", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user236", "password": "user236", "email": "user236@test.com", "gender": "female", "age": "18_28", "city": "彰化縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user236", res.data);
    }).catch(err => {
        console.error("Error for: user236", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user237", "password": "user237", "email": "user237@test.com", "gender": "male", "age": "29_40", "city": "桃園市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user237", res.data);
    }).catch(err => {
        console.error("Error for: user237", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user238", "password": "user238", "email": "user238@test.com", "gender": "female", "age": "29_40", "city": "新北市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user238", res.data);
    }).catch(err => {
        console.error("Error for: user238", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user239", "password": "user239", "email": "user239@test.com", "gender": "female", "age": "29_40", "city": "嘉義縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user239", res.data);
    }).catch(err => {
        console.error("Error for: user239", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user240", "password": "user240", "email": "user240@test.com", "gender": "male", "age": "65plus", "city": "屏東縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user240", res.data);
    }).catch(err => {
        console.error("Error for: user240", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user241", "password": "user241", "email": "user241@test.com", "gender": "female", "age": "41_64", "city": "花蓮縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user241", res.data);
    }).catch(err => {
        console.error("Error for: user241", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user242", "password": "user242", "email": "user242@test.com", "gender": "female", "age": "41_64", "city": "基隆市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user242", res.data);
    }).catch(err => {
        console.error("Error for: user242", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user243", "password": "user243", "email": "user243@test.com", "gender": "female", "age": "29_40", "city": "連江縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user243", res.data);
    }).catch(err => {
        console.error("Error for: user243", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user244", "password": "user244", "email": "user244@test.com", "gender": "male", "age": "under18", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user244", res.data);
    }).catch(err => {
        console.error("Error for: user244", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user245", "password": "user245", "email": "user245@test.com", "gender": "female", "age": "41_64", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user245", res.data);
    }).catch(err => {
        console.error("Error for: user245", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user246", "password": "user246", "email": "user246@test.com", "gender": "male", "age": "29_40", "city": "台中市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user246", res.data);
    }).catch(err => {
        console.error("Error for: user246", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user247", "password": "user247", "email": "user247@test.com", "gender": "female", "age": "41_64", "city": "連江縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user247", res.data);
    }).catch(err => {
        console.error("Error for: user247", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user248", "password": "user248", "email": "user248@test.com", "gender": "male", "age": "18_28", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user248", res.data);
    }).catch(err => {
        console.error("Error for: user248", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user249", "password": "user249", "email": "user249@test.com", "gender": "female", "age": "18_28", "city": "連江縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user249", res.data);
    }).catch(err => {
        console.error("Error for: user249", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user250", "password": "user250", "email": "user250@test.com", "gender": "female", "age": "41_64", "city": "嘉義市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user250", res.data);
    }).catch(err => {
        console.error("Error for: user250", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user251", "password": "user251", "email": "user251@test.com", "gender": "male", "age": "18_28", "city": "桃園市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user251", res.data);
    }).catch(err => {
        console.error("Error for: user251", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user252", "password": "user252", "email": "user252@test.com", "gender": "female", "age": "41_64", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user252", res.data);
    }).catch(err => {
        console.error("Error for: user252", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user253", "password": "user253", "email": "user253@test.com", "gender": "female", "age": "65plus", "city": "新竹縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user253", res.data);
    }).catch(err => {
        console.error("Error for: user253", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user254", "password": "user254", "email": "user254@test.com", "gender": "male", "age": "65plus", "city": "金門縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user254", res.data);
    }).catch(err => {
        console.error("Error for: user254", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user255", "password": "user255", "email": "user255@test.com", "gender": "female", "age": "18_28", "city": "台東縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user255", res.data);
    }).catch(err => {
        console.error("Error for: user255", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user256", "password": "user256", "email": "user256@test.com", "gender": "female", "age": "under18", "city": "金門縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user256", res.data);
    }).catch(err => {
        console.error("Error for: user256", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user257", "password": "user257", "email": "user257@test.com", "gender": "male", "age": "41_64", "city": "花蓮縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user257", res.data);
    }).catch(err => {
        console.error("Error for: user257", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user258", "password": "user258", "email": "user258@test.com", "gender": "male", "age": "18_28", "city": "雲林縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user258", res.data);
    }).catch(err => {
        console.error("Error for: user258", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user259", "password": "user259", "email": "user259@test.com", "gender": "female", "age": "18_28", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user259", res.data);
    }).catch(err => {
        console.error("Error for: user259", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user260", "password": "user260", "email": "user260@test.com", "gender": "female", "age": "18_28", "city": "台北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user260", res.data);
    }).catch(err => {
        console.error("Error for: user260", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user261", "password": "user261", "email": "user261@test.com", "gender": "male", "age": "under18", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user261", res.data);
    }).catch(err => {
        console.error("Error for: user261", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user262", "password": "user262", "email": "user262@test.com", "gender": "female", "age": "18_28", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user262", res.data);
    }).catch(err => {
        console.error("Error for: user262", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user263", "password": "user263", "email": "user263@test.com", "gender": "female", "age": "29_40", "city": "澎湖縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user263", res.data);
    }).catch(err => {
        console.error("Error for: user263", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user264", "password": "user264", "email": "user264@test.com", "gender": "male", "age": "41_64", "city": "新竹縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user264", res.data);
    }).catch(err => {
        console.error("Error for: user264", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user265", "password": "user265", "email": "user265@test.com", "gender": "male", "age": "29_40", "city": "桃園市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user265", res.data);
    }).catch(err => {
        console.error("Error for: user265", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user266", "password": "user266", "email": "user266@test.com", "gender": "male", "age": "18_28", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user266", res.data);
    }).catch(err => {
        console.error("Error for: user266", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user267", "password": "user267", "email": "user267@test.com", "gender": "female", "age": "29_40", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user267", res.data);
    }).catch(err => {
        console.error("Error for: user267", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user268", "password": "user268", "email": "user268@test.com", "gender": "male", "age": "18_28", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user268", res.data);
    }).catch(err => {
        console.error("Error for: user268", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user269", "password": "user269", "email": "user269@test.com", "gender": "male", "age": "under18", "city": "嘉義市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user269", res.data);
    }).catch(err => {
        console.error("Error for: user269", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user270", "password": "user270", "email": "user270@test.com", "gender": "female", "age": "29_40", "city": "台南市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user270", res.data);
    }).catch(err => {
        console.error("Error for: user270", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user271", "password": "user271", "email": "user271@test.com", "gender": "female", "age": "under18", "city": "連江縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user271", res.data);
    }).catch(err => {
        console.error("Error for: user271", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user272", "password": "user272", "email": "user272@test.com", "gender": "male", "age": "65plus", "city": "台東縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user272", res.data);
    }).catch(err => {
        console.error("Error for: user272", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user273", "password": "user273", "email": "user273@test.com", "gender": "female", "age": "29_40", "city": "高雄市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user273", res.data);
    }).catch(err => {
        console.error("Error for: user273", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user274", "password": "user274", "email": "user274@test.com", "gender": "female", "age": "18_28", "city": "台南市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user274", res.data);
    }).catch(err => {
        console.error("Error for: user274", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user275", "password": "user275", "email": "user275@test.com", "gender": "male", "age": "41_64", "city": "新竹縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user275", res.data);
    }).catch(err => {
        console.error("Error for: user275", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user276", "password": "user276", "email": "user276@test.com", "gender": "female", "age": "41_64", "city": "基隆市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user276", res.data);
    }).catch(err => {
        console.error("Error for: user276", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user277", "password": "user277", "email": "user277@test.com", "gender": "female", "age": "41_64", "city": "台中市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user277", res.data);
    }).catch(err => {
        console.error("Error for: user277", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user278", "password": "user278", "email": "user278@test.com", "gender": "female", "age": "65plus", "city": "新北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user278", res.data);
    }).catch(err => {
        console.error("Error for: user278", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user279", "password": "user279", "email": "user279@test.com", "gender": "male", "age": "65plus", "city": "嘉義市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user279", res.data);
    }).catch(err => {
        console.error("Error for: user279", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user280", "password": "user280", "email": "user280@test.com", "gender": "male", "age": "65plus", "city": "台南市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user280", res.data);
    }).catch(err => {
        console.error("Error for: user280", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user281", "password": "user281", "email": "user281@test.com", "gender": "male", "age": "18_28", "city": "嘉義縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user281", res.data);
    }).catch(err => {
        console.error("Error for: user281", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user282", "password": "user282", "email": "user282@test.com", "gender": "male", "age": "65plus", "city": "苗栗縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user282", res.data);
    }).catch(err => {
        console.error("Error for: user282", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user283", "password": "user283", "email": "user283@test.com", "gender": "male", "age": "65plus", "city": "苗栗縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user283", res.data);
    }).catch(err => {
        console.error("Error for: user283", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user284", "password": "user284", "email": "user284@test.com", "gender": "female", "age": "65plus", "city": "台北市", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user284", res.data);
    }).catch(err => {
        console.error("Error for: user284", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user285", "password": "user285", "email": "user285@test.com", "gender": "female", "age": "under18", "city": "新竹市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user285", res.data);
    }).catch(err => {
        console.error("Error for: user285", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user286", "password": "user286", "email": "user286@test.com", "gender": "male", "age": "29_40", "city": "新北市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user286", res.data);
    }).catch(err => {
        console.error("Error for: user286", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user287", "password": "user287", "email": "user287@test.com", "gender": "male", "age": "29_40", "city": "桃園市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user287", res.data);
    }).catch(err => {
        console.error("Error for: user287", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user288", "password": "user288", "email": "user288@test.com", "gender": "male", "age": "41_64", "city": "新北市", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user288", res.data);
    }).catch(err => {
        console.error("Error for: user288", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user289", "password": "user289", "email": "user289@test.com", "gender": "female", "age": "29_40", "city": "台東縣", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user289", res.data);
    }).catch(err => {
        console.error("Error for: user289", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user290", "password": "user290", "email": "user290@test.com", "gender": "male", "age": "18_28", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user290", res.data);
    }).catch(err => {
        console.error("Error for: user290", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user291", "password": "user291", "email": "user291@test.com", "gender": "female", "age": "18_28", "city": "苗栗縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user291", res.data);
    }).catch(err => {
        console.error("Error for: user291", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user292", "password": "user292", "email": "user292@test.com", "gender": "male", "age": "under18", "city": "彰化縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user292", res.data);
    }).catch(err => {
        console.error("Error for: user292", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user293", "password": "user293", "email": "user293@test.com", "gender": "male", "age": "41_64", "city": "彰化縣", "income": "70_99" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user293", res.data);
    }).catch(err => {
        console.error("Error for: user293", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user294", "password": "user294", "email": "user294@test.com", "gender": "female", "age": "41_64", "city": "高雄市", "income": "40_69" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user294", res.data);
    }).catch(err => {
        console.error("Error for: user294", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user295", "password": "user295", "email": "user295@test.com", "gender": "male", "age": "18_28", "city": "台東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user295", res.data);
    }).catch(err => {
        console.error("Error for: user295", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user296", "password": "user296", "email": "user296@test.com", "gender": "female", "age": "under18", "city": "宜蘭縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user296", res.data);
    }).catch(err => {
        console.error("Error for: user296", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user297", "password": "user297", "email": "user297@test.com", "gender": "female", "age": "18_28", "city": "台東縣", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user297", res.data);
    }).catch(err => {
        console.error("Error for: user297", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user298", "password": "user298", "email": "user298@test.com", "gender": "female", "age": "65plus", "city": "澎湖縣", "income": "100_199" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user298", res.data);
    }).catch(err => {
        console.error("Error for: user298", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user299", "password": "user299", "email": "user299@test.com", "gender": "male", "age": "under18", "city": "台中市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user299", res.data);
    }).catch(err => {
        console.error("Error for: user299", err.response?.data || err.message);
    });

    await axios.post('https://domain.xxxxx/artEvents-member_control_api_v2.php?action=register', { "username": "user300", "password": "user300", "email": "user300@test.com", "gender": "female", "age": "under18", "city": "基隆市", "income": "under39" }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log("Registered: user300", res.data);
    }).catch(err => {
        console.error("Error for: user300", err.response?.data || err.message);
    });

}

registerUsers();