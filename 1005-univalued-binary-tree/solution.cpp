/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isTree(TreeNode *root , TreeNode *tail)
{
     if(root==NULL)  
            return true ;
       
       bool x = isTree(root->left , root ) ; 
	   bool y = isTree(root->right , root) ; 
        if(root->val ==tail->val && x && y ) {
              return true ;
        }  
            return false ;
}
    bool isUnivalTree(TreeNode* root) {
        return isTree(root,root);
    }
};
