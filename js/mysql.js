
			//创建表
			function createTable(sql) {
				db.transaction(function(tx) {
					tx.executeSql(
						sql, [],
						function(tx, result) { console.log('创建stu表成功'); },
						function(tx, error) {
							console.log('创建stu表失败:' + error.message);
						});
				});
			}
//			//	添加数据库
			function insert(sql) {
				db.transaction(function(tx) {
					tx.executeSql(
						sql,[],
						function(){ 
						},
						function(tx, error) {
						});
				});}
//				//	查询数据库
			function query(sql) {
					db.transaction(function(tx) {
						tx.executeSql(
							sql, [],
							function(tx, result) { console.log(result);
							},
							function(tx, error) {
								alert('查询失败: ' + error.message);
							});
					});
				}
				
//				//	更新数据库
				function update(id, name) {
					db.transaction(function(tx) {
						tx.executeSql(
							"update stu set name = ? where id= ?", [name, id],
							function(tx, result) {},
							function(tx, error) {
								alert('更新失败: ' + error.message);
							});
					});
				}
//				//删除数据库	
				function del(sql,id) {
					db.transaction(function(tx) {
						tx.executeSql(
							sql, [id],
							function(tx, result) {},
							function(tx, error) {
								alert('删除失败: ' + error.message);
							});
					});
				}

