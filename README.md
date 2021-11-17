# Shops
## React frontend and AWS Amplify Backend
- Serverless React App
- Amplify Auth and GraphQL API
- Amplify CICD

## Testing

<table>
<tbody>
 <tr>
<td align="center">
<img  style="width:400px" src="https://github.com/jparkley/shops-react-amplify-serverless/blob/master/screenshot-react-amplify-shops-01.png"> 
</td>
</tr>
 </tbody>
</table>

## Dependencies
- @aws-amplify/ui-react 1.2.20
- aws-amplify 4.3.2

## Blockers
- Amplify Photopicker: how to customize CSS and some functions


## Add AWS Services
- amplify init
- amplify add auth
- amplify add api
- amplify add storage


## AWS Setup
- Change S3 Bucket permission for public access to images saved on S3 stroage
- If the default depth is set as 2 during the initial GraphQL setup, change it to 4 by following these steps:
⋅⋅* amplify configure codegen
⋅⋅* select 'Javascript', enter for the name pattern (keeping it the same), change the statement depth to 4

## TODO
- (2021.11.14~)
- for non-ownders: Checkout button -> style update
- for owners: Update / Delete button
- add functionality for the above
- modal for update (not for creation)


- (later)
- use SCSS (CSS refactoring needed)



:musical_note:
