
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT id, name, url_image, price, discount, category FROM product order by category', (err, product) => {

            if(err){
                res.json(err);
            }
     
        

            console.log
            res.render('product', {
                data:product
            });
            
        });
    });
};

controller.buscar = (req, res) => {
   console.log(req.body.name)
   req.getConnection((err, conn) =>{
    conn.query('SELECT id, name, url_image, price, discount, category FROM product where name like ' + "'%" + req.body.name + "%'" , (err, product) => {

        if(err){
            res.json(err);
        }
   

        console.log
        res.render('product', {
            data:product
        });

        
    });
});
};


module.exports = controller;