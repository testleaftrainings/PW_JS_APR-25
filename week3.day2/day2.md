-> Playwright Locator
-> Basic Xpath
-> ClassRoom + Break
-> Adavance Xpath
-> Array


Playwright getBy Locators:
Playwright provides a set of getBy methods to locate elements in the DOM, which can be more expressive and 
powerful compared to traditional CSS selectors. These methods are used to interact with web elements 
in a more human-readable way.

Commonly Used getBy Locators
getByText: Selects elements containing specific text.
Example: page.getByText('Submit') selects an element with the text "Submit".

 page.getByText('Leads').click()


getByRole: Selects elements based on their ARIA roles.
Example: page.getByRole('button', { name: 'Login' }) selects a button element with the accessible name "Login".

page.getByRole('input',{name:'companyName'})

getByLabel: Selects form elements associated with a specific label.
Example: page.getByLabel('Username') selects the input field associated with the label "Username".

getByPlaceholder: Selects input elements based on their placeholder attribute.
Example: page.getByPlaceholder('Enter your password') selects an input field with the placeholder "Enter your password".

getByAltText: Selects images and other elements with an alt attribute.
Example: page.getByAltText('Product image') selects an image with the alt text "Product image".

getByTestId: Selects elements with a specific data-testid attribute.
Example: page.getByTestId('submit-button') selects an element with data-testid="submit-button".




Css:
1. frist()-> choose first value
2. last()-> choos last value
3. nth()-> choose the value inbetween 
nth-> index value start from '0'
nth(2)-> 3 index value



Absolute xpath:
/html/body/div[2]/div[2]/div/form/p/input


Relative Xpath

//tagName[@attributename='attributevalue']

1.Attribute based Xpath:
//tagName[@attributeName='attributeValue']
ex://input[@id='username']

2.TextBased Xpath:

//tagName[text()='text value']
ex://a[text()='Bestsellers']

3.partial Attribute based xpath:
//tagName[contains(@attribute,'attributevalue)]
//input[contains(@name,'erna')]

4.partial Text based xpath:
//tagname[contains(text(),'text value')]
ex://a[contains(text(),'Customer')]

5.Collection or Index based xpath

(//tagName[text()='Text value'])[index value]
index value -> 1
index value should not go beyond 5
index value can use 1 - 5

ex:(//input[contains(@name,'TextField')])[2]


Axes Xpath:
1.parent to child
basic xpath/tagName of child
ex://div[@class='nav-search-field ']/input

2.GrandParent to GrandChild
basic xpath for GP//tagname of GC
ex://div[@id='usernamegroup']//input

3.Elder sibling to Younger sibling

basic xpath for ES/following-sibling::tagname of YS
//label[text()='Username']/following-sibling::input

4.Elder cousin to Younger cousin

basic xpath for EC/following::tagname of YC
//input[@id='username']/following::input[@id='password']




Array:
- collection Data
- Store Multiple data
- it have all types of data
[1,'dilip',true]
-> pass value inside []

