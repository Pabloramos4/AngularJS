angular.module("ToDoList",["LocalStorageModule"])
			.controller("ToDoController",function ($scope, localStorageService) 
			{
				/*
					actividad: "Terminar la tarea"
					fecha: 26-05-2016 2:00pm
				*/
				//para poder mantener los datos aunque la pagina se actualice hacemos lo siguiente
				if(localStorageService.get("angular-todoList"))
				{
					$scope.todo = localStorageService.get("angular-todoList");
				}
				else
				{
					$scope.todo = [];
				}

				//Forma 1
				/*
				$scope.addActv = function()
								{
									$scope.todo.push($scope.newActv);
									$scope.newActv = {};
									localStorageService.set("angular-todoList", $scope.todo);
								}
				$scope.clean = function()	
								{
									$scope.todo = [];
									localStorageService.set("angular-todoList", $scope.todo);
								}
								*/

				//Forma 2
				//El metodo swatchCollection sirve para observar lo que esta pasando en el dato seleccionado
				//El metodo swatchCollection sirve para observar lo que esta pasando en los arreglos
				$scope.$watchCollection("todo", function(newValue, oldValue)
												{
													localStorageService.set("angular-todoList", $scope.todo);
												});
				$scope.addActv = function()
								{
									$scope.todo.push($scope.newActv);
									$scope.newActv = {};
									localStorageService.set("angular-todoList", $scope.todo);
								}
				
								

			}
		);