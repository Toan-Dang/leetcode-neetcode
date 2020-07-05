/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
 ListNode *p = new ListNode;
    int sum =0;
    ListNode *q = p;
   while(l1!=NULL||l2!=NULL||sum>0)
        {
            if(l1!=NULL)
            {
                sum+=l1->val;
                l1=l1->next;
            }
            if(l2!=NULL)
            {
                sum+=l2->val;
                l2=l2->next;
            }
           p->next =new ListNode(sum%10);
            sum/=10;
            p=p->next;
        }        
    return q->next;
}
    
};
