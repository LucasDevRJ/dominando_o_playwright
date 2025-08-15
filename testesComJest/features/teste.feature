Feature: Post

  Scenario: SignIn
    Given Navega até a página Saucedemo
    When Realiza o login
    And Clica no botão de login
    Then A página deverá ter o título de "Swag Labs"